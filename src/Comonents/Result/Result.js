import React from 'react';
import './Result.css'

class Result extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }

  render(){return <tr>
    <td>{this.props.average_rating}</td>
    <td>{this.props.original_publication_year}</td>
    <td>{this.props.ratings_count}</td>
    <td>{this.props.best_book}</td>
    <td>{this.props.name}</td>
    </tr>}
}


export default Result;
