import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

export default class SavedList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        
          {this.props.list.map(movie => (
            <NavLink className="saved-movie" to={`/movies/${movie.id}`}>{movie.title}</NavLink>
          ))}
          <NavLink className="home-button" to="/movies">Home</NavLink>
       
        
      </div>
    );
  }
}
