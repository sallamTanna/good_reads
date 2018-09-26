import React from 'react';
import X2JS from 'x2js';
import Result from '../Result/Result'
var x2js = new X2JS();
var proxyUrl = 'https://cors-anywhere.herokuapp.com/';


 class Serach extends React.Component{
   constructor(props){
     super(props);
     this.state = {
       inputValue : '',
       work : [],
       objectWork:'',
       data:''
     }
   }

    handleChange = (e)=> {
      return this.setState({inputValue:e.target.value})}

 handleClick = ()=>{
      fetch(`${proxyUrl}https://www.goodreads.com/search/index.xml?key=KJ1OgsxA9pCwNalhJi0Xg&q=${this.state.inputValue}`)
      .then((res)=>res.text())
      .then((response)=>  {console.log('jjjjjjjjjfff', (x2js.xml2js(response).GoodreadsResponse.search.results.work));
                            if(Array.isArray(x2js.xml2js(response).GoodreadsResponse.search.results.work)){
                              return this.setState({work:x2js.xml2js(response).GoodreadsResponse.search.results.work})
                            }else if(typeof x2js.xml2js(response).GoodreadsResponse.search.results.work =='object') {
                                return this.setState({objectWork:x2js.xml2js(response).GoodreadsResponse.search.results.work})
                              }
       } )

      .catch((error)=> console.log(error))
}



   render(){

     return <div>
      <input type="text" className="searchInput" value={this.state.inputValue} onChange={this.handleChange}/>
      <input type="submit" className='searchButton' onClick={this.handleClick} />
      {this.state.work.length ===0 ?
      <h1>No results...</h1>:<tbody>
      <tr>
   <th>Average rating</th>
   <th>Publication year</th>
   <th>Ratings count</th>
   <th>Title</th>
   <th>Author</th>
 </tr>
  {  (this.state.work.map((item)=> <Result
      average_rating={item.best_book.title}
      original_publication_year={item.original_publication_year.__text}
      ratings_count={item.ratings_count.__text}
      name={item.best_book.author.name}
      title={item.best_book.title} 

      key={item.average_rating} /> ))}
</tbody>
    }


    {this.state.objectWork && <tbody>
    <tr>
 <th>Average rating</th>
 <th>Publication year</th>
 <th>Ratings count</th>
 <th>Title</th>
 <th>Author</th>
</tr>
<Result average_rating={this.state.objectWork.average_rating}
        original_publication_year={this.state.objectWork.original_publication_year.__text}
        ratings_count={this.state.objectWork.ratings_count.__text}
        name={this.state.objectWork.best_book.author.name}
        title={this.state.objectWork.best_book.title}       />
</tbody>}


     </div>
   }




 }

export default Serach;
