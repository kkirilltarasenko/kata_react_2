import React, { FC, useState, useEffect, useContext } from 'react';
import GenreContext from '../context/genreContext';
import MovieContext from "../context/movieContext";
import {FetchResults, Movie} from '../types/types';
import { Spin } from 'antd';
import 'antd/dist/reset.css';
import './App.css';
import MovieNavigation from '../MovieNavigation/MovieNavigation';
import MovieHeader from '../MovieHeader/MovieHeader';
import MovieList from '../MovieList/MovieList';
import MovieFooter from '../MovieFooter/MovieFooter';
import MovieRated from '../MovieRated/MovieRated';
import {GetMovies} from "../MoviesApi/GetMovies";


const App : FC = () => {
  const genres = useContext(GenreContext);

  const [movies, setMovies] = useState(Array<Movie>);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [rated, setRated] = useState(false);
  const [staredMovies, setStaredMovies] = useState(Array<Movie>);

  const API_KEY = 'ec71a917ec16763b6abcd7bad19e8879';
  const PATH_URL = `https://api.themoviedb.org/3/${search.length === 0 ? 'movie' : 'search'}/${search.length === 0 ? 'popular' : 'movie'}?api_key=${API_KEY}&language=en-US&page=${page}&query=${search}\``;

  useEffect(() => {
    setLoading(true);
    async function fetchMovies(PATH_URL: string): Promise<FetchResults> {
      return await GetMovies.getAll(PATH_URL);
    }

    fetchMovies(PATH_URL).then((res: FetchResults) => {
      setMovies(res.results);
      setLoading(false);
    });
  }, [PATH_URL, page, search]);



  if (loading) {
    return <Spin className="app__spin" tip="Loading..." size="large" />
  }

  const selectMovie = (movie: Movie) : void => {
    setStaredMovies([...staredMovies, movie]);
  }

  const setStars = (movie: Movie, starsCount: number) : void => {
    movie.stars = starsCount;
  }

  return (
    <MovieContext.Provider value={movies}>
      <GenreContext.Provider value={genres}>
        <div className="app">
          <MovieNavigation rated={rated} changePage={setRated} />
          {!rated ?
              <div>
                <MovieHeader setSearch={setSearch} />
                <MovieList setStars={setStars} selectMovie={selectMovie}/>
                <MovieFooter page={page} setPage={setPage} />
              </div>
              :
              <MovieRated setStars={setStars} movies={staredMovies} />
          }
        </div>
      </GenreContext.Provider>
    </MovieContext.Provider>
  );
}

export default App;