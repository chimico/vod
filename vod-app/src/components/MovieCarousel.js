import React, { Component } from 'react';
import MovieList from './MovieList';

export default class MovieCarousel extends Component {
  render() {    
    return (
      <div className={'swiper-container'}>
        <div className={'swiper-wrapper'}>
          <MovieList movies={this.props.movies}
            changeMovie={this.props.onSelect}
            playMovie={this.props.playMovie} />
        </div>
      </div>
    );
  }
}