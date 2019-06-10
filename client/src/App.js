import React, { Component } from 'react';
import {Route} from 'react-router-dom';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: []
    };
  }

  addToSavedList = movie => {
    const savedList = this.state.savedList;
    if(!savedList.includes(movie)){
      savedList.push(movie);
      this.setState({ savedList: [...savedList] });
    } else {
      for( var i = 0; i < savedList.length; i++){ 
        if ( savedList[i] === movie) {
          savedList.splice(i, 1); 
          this.setState({savedList});
        }
     }
    }
  };

  render() {
    return (
      <div>
        <SavedList list={this.state.savedList} />
        <Route exact path="/movies" component={MovieList} />
        <Route path="/movies/:movieId" render={(props) => (<Movie addToSavedList={this.addToSavedList} {...props}/>)} />
      </div>
    );
  }
}
