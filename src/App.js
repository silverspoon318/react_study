import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

const movies = [
  {
    title : "Matrix",
    poster : "https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/The_Matrix_Poster.jpg/220px-The_Matrix_Poster.jpg"
  },
  {
    title : "Old Boy",
    poster : "https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Oldboykoreanposter.jpg/220px-Oldboykoreanposter.jpg"
  },
  {
    title : "Star Wars",
    poster : "http://img.lum.dolimg.com/v1/images/starwars_551c43f4.jpeg"
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">

        { movies.map((movie, index) => {
          return <Movie title = { movie.title } poster = { movie.poster } key = { index } />
        })}

        {/* <Movie title={ movieTitles [0]} poster = { movieImages[0] } />
        <Movie title={ movieTitles [1]} poster = { movieImages[1] } />
        <Movie title={ movieTitles [2]} poster = { movieImages[2] } /> */}
      </div>
    );
  }
}

export default App;
