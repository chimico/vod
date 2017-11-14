import React, { Component } from 'react';

export default class MovieImg extends Component {
  render() {
    const src = `http://via.placeholder.com/217x112?text=${this.props.movie.alt}`;
    return (
      <img src={src} alt={this.props.movie.alt} />
    );
  }
}