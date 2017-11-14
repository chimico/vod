import React, { Component } from 'react';
import { Modal, ModalBody, Button } from 'reactstrap';
import MovieCarousel from './components/MovieCarousel';
import MoviePlayer from './components/MoviePlayer';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
    };
    this.selectMovie = this.selectMovie.bind(this);
    this.playMovie = this.playMovie.bind(this);
  }
  
  selectMovie(url) {
    this.setState({ url });
  }
  
  playMovie() {
    this.player.play(this.state.url);
    this.player.toggle();
  }
  
  render() {
    const placeholder = 'http://via.placeholder.com/217x122';
    const videoSample = 'http://techslides.com/demos/sample-videos/small.mp4';
    
    return (
      <div className="App" onKeyPress={this.handleKeyPress}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <MovieCarousel movies={[
          { id: 1, src: placeholder, alt: 'Movie 1', url: videoSample },
          { id: 2, src: placeholder, alt: 'Movie 2', url: videoSample },
          { id: 3, src: placeholder, alt: 'Movie 3', url: videoSample },
          { id: 4, src: placeholder, alt: 'Movie 4', url: videoSample },
          { id: 5, src: placeholder, alt: 'Movie 5', url: videoSample },
        ]} onSelect={this.selectMovie} playMovie={this.playMovie} />
        <MoviePlayer ref={node => { if (node) this.player = node; } }/>
      </div>
    );
  }
}

export default App;
