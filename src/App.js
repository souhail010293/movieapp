import React, { useState } from 'react';

import { moviesData } from './Components/moviesData';
import Search from './Components/SearchMovie/Search';
import MoviesList from './Components/MoviesList';
import AddMovie from './Components/AddMovie/AddMovie';

import './App.css';

function App() {
  const [moviesList, setMoviesList] = useState(moviesData);

  const [nameSearch, setNameSearch] = useState('');
  const [ratingSearch, setRatingSearch] = useState(1);

  const addMovie = (e, newMovie) => {
    e.preventDefault();
    return setMoviesList([...moviesList, newMovie]);
  };

  return (
    <div className="App">
      <Search
        setNameSearch={setNameSearch}
        setRatingSearch={setRatingSearch}
        ratingSearch={ratingSearch}
      />
      <MoviesList
        moviesList={moviesList}
        nameSearch={nameSearch}
        ratingSearch={ratingSearch}
      />
      <AddMovie addMovie={addMovie} />
    </div>
  );
}

export default App;
