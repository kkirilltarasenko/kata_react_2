import React, { FC, useState, useEffect, useContext } from 'react';
import Context from '../context/context';
import { Movie } from '../types/types';
import { Spin } from 'antd';
import 'antd/dist/reset.css';
import './App.css';
import MovieNavigation from '../MovieNavigation/MovieNavigation';
import MovieHeader from '../MovieHeader/MovieHeader';
import MovieList from '../MovieList/MovieList';
import MovieFooter from '../MovieFooter/MovieFooter';
import MovieRated from '../MovieRated/MovieRated';


const App : FC = () => {
  const API_KEY = 'ec71a917ec16763b6abcd7bad19e8879';

  const genres = useContext(Context);

  const [movies, setMovies] = useState(Array<Movie>);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [rated, setRated] = useState(false);
  const [staredMovies, setStaredMovies] = useState(Array<Movie>);

  useEffect(() => {
    // setLoading(true);
    setTimeout(() => {
      fetch(`https://api.themoviedb.org/3/${search.length === 0 ? 'movie' : 'search'}/${search.length === 0 ? 'popular' : 'movie'}?api_key=${API_KEY}&language=en-US&page=${page}&query=${search}`)
      .then((res) => {
        return res.json();
      })
      .then((movies) => {
        // console.log(movies);
        setMovies(movies.results);
        setLoading(false);
      })
    }, 300);
  }, [page, search]);

  if (loading) {
    return <Spin className="app__spin" tip="Loading..." size="large" />
  }

  const selectMovie = (movie: Movie) : void => {
    setStaredMovies([...staredMovies, movie]);
  }

  const setStars = (movie: Movie, starsCount: number) : void => {
    movie.stars = starsCount;
  }

  console.log(movies);
  console.log(staredMovies);

  return (
    <Context.Provider value={genres}>
      <div className="app">
        <MovieNavigation rated={rated} changePage={setRated} />
        {!rated ?
            <div>
              <MovieHeader setSearch={setSearch} />
              <MovieList setStars={setStars} movies={movies} selectMovie={selectMovie}/>
              <MovieFooter page={page} setPage={setPage} />
            </div>
            :
            <MovieRated setStars={setStars} movies={staredMovies} />
        }
      </div>
    </Context.Provider>
  );
}

export default App;