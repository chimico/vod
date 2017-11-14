import React, { Component } from 'react';
import Swiper from 'react-id-swiper';
import MovieImg from './MovieImg';

export default class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMovie: 0,
    };
    this.swiper = null;
    this.name = 'MovieList';
  }
  
  setActiveMovie() {
    const currentMovie = this.swiper.activeIndex;
    this.props.changeMovie(this.props.movies[currentMovie].url);
    this.setState({ currentMovie });
  }
  
  playMovie() {
    const currentMovie = this.swiper.activeIndex;
    this.props.playMovie();
  }
  
  render() {
    const params = {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      spaceBetween: 2,
      autoHeight: true,
      slidesPerView: 'auto',
      loop: false,
      loopedSlides: 1,
      centeredSlides: true,
      keyboard: true,
      on: {
        keyPress: (keyCode) => {
          if (keyCode === 13) {
            this.playMovie();
          }
        },
        slideChange: () => {
          this.setActiveMovie();
        },
      }
    };
    
    return (
      <Swiper {...params} ref={node => { if (node) this.swiper = node.swiper; } }>
        {this.props.movies.map((movie, index) => (
          <div className={'swiper-slide'} key={index} style={{width:'217px'}}>
            <MovieImg movie={movie} />
          </div>
        ))}
      </Swiper>
    );
  }
}