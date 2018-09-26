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

    handleChange = (e)=> this.setState({inputValue:e.target.value})



handleClick = ()=>{
      fetch(`${proxyUrl}https://www.goodreads.com/search/index.xml?key=KJ1OgsxA9pCwNalhJi0Xg&q=${this.state.inputValue}`)
      .then((res)=>res.text())
      .then((response)=>  {console.log('fff',x2js.xml2js(response).GoodreadsResponse.search.results); return this.setState({work:x2js.xml2js(response).GoodreadsResponse.search.results})} )
      .catch((error)=> console.log(error))
}


   render(){
     return <div>
      <input type="text" className="searchInput" value={this.state.inputValue} onChange={this.handleChange}/>
      <input type="submit" className='searchButton' onClick={this.handleClick} />
      <div>{this.state.work.length ===0 ?
      <h1>No results...</h1>:<table>
      <tr>
   <th>Average rating</th>
   <th>Publication year</th>
   <th>Ratings count</th>
   <th>Title</th>
   <th>Author</th>
 </tr>
  {  (this.state.work.work.map((item)=> <Result
      average_rating={item.average_rating}
      original_publication_year={item.original_publication_year.__text}
      ratings_count={item.ratings_count.__text}
      best_book={item.best_book.title}
      name={item.best_book.author.name}
      key={item.average_rating} /> ))}
</table>
    }</div>


     </div>
   }




 }

export default Serach;




// var jsonObj = x2js.xml2js( '<div><sallam>data1</sallam><sallam>data2</sallam></div>')
// console.log('ddddddd', jsonObj);
