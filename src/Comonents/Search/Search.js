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
       data:''
     }
   }

    handleChange = (e)=> {
      return this.setState({inputValue:e.target.value})}

 handleClick = ()=>{
      fetch(`${proxyUrl}https://www.goodreads.com/search/index.xml?key=KJ1OgsxA9pCwNalhJi0Xg&q=${this.state.inputValue}`)
      .then((res)=>res.text())
      .then((response)=> this.setState({work:x2js.xml2js(response).GoodreadsResponse.search.results.work}))
      .catch((error)=> console.log(error))
}

 

   render(){

     return <div>
      <input type="text" className="searchInput" value={this.state.inputValue} onChange={this.handleChange}/>
      <input type="submit" className='searchButton' onClick={this.handleClick} />
      {this.state.work?<tbody>
      <tr>
   <th>Average rating</th>
   <th>Publication year</th>
   <th>Ratings count</th>
   <th>Title</th>
   <th>Author</th>
 </tr>
  {  (this.state.work.map((item, index)=><Result
      average_rating={typeof item.average_rating=='string'? item.average_rating:item.__text}
      original_publication_year={item.original_publication_year.__text}
      ratings_count={item.ratings_count.__text}
      name={item.best_book.author.name}
      title={item.best_book.title}

      key={index} />))}
</tbody>:
      <h1>No results for this book!</h1>
    }





     </div>
   }




 }

export default Serach;
