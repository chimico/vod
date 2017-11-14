import React, { Component } from 'react';
import MovieCarousel from './components/MovieCarousel';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const placeholder = 'http://via.placeholder.com/217x122';
    
    return (
      <div className="App" onKeyPress={this.handleKeyPress}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <MovieCarousel movies={[
          { id: 1, src: placeholder, alt: 'Movie 1' },
          { id: 2, src: placeholder, alt: 'Movie 2' },
          { id: 3, src: placeholder, alt: 'Movie 3' },
          { id: 4, src: placeholder, alt: 'Movie 4' },
          { id: 5, src: placeholder, alt: 'Movie 5' },
        ]} />
      </div>
    );
  }
}

export default App;
