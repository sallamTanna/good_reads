import React from 'react';
import './Result.css'

class Result extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }

  render(){return <div>
    <div className="ulElement">
    <span>average_rating:{this.props.average_rating}</span><br/>
    <span>original_publication_year:{this.props.original_publication_year}</span><br/>
    <span>ratings_count:{this.props.ratings_count}</span><br/>
    <span>best_book:{this.props.best_book}</span><br/>
    <span>author name:{this.props.name}</span>
</div>

    </div>}
}


export default Result;
