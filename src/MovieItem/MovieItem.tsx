import React, {FC} from 'react';
import { Tag, Rate } from 'antd';
import './MovieItem.css';
import {Genre, Movie} from "../types/types";

/* Components */
import RatingElement from './RatingElement/RatingElement';

interface MovieProps {
    movie: Movie,
    genres: Array<Genre>,
    selectMovie?: (movie: Movie) => void,
    setStars: (movie: Movie, starCount: number) => void
}

const MovieItem : FC<MovieProps> = ({ movie, genres, selectMovie , setStars}) => {
    const IMG_URL : string = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    const currentGenres : (Genre | null)[] = genres.map((el: Genre) => {
       if (movie.genre_ids.includes(el.id)) {
           return el;
       }
       return null;
    }).filter((el: Genre | null) => el !== null);

    const rateMovie = (movie: Movie) : void => {
        if (selectMovie) {
            selectMovie(movie);
        }
    }

    return (
        <div className="movie">
            <img className="movie__img" src={IMG_URL} alt="" />
            <div className="movie__container">
                <div className="movie__container--header">
                    <h1 className="movie__title">{movie.original_title}</h1>
                    <RatingElement rating={movie.vote_average} />
                </div>
                <p className="movie__date">{movie.release_date}</p>
                <ul className="movie__genres">
                    {currentGenres.map((el: Genre | null) =>
                        <Tag className="movie__genre" key={el?.id}>
                            <div>{el?.body}</div>
                        </Tag>
                    )}
                </ul>
                <h2 className="movie__overview">
                    {movie.overview.length > 250 ? `${movie.overview.substring(0, 250)}...` 
                    : 
                    movie.overview}
                </h2>
                <div className="movie__stars" onClick={() => rateMovie(movie)}>
                    <Rate value={movie.stars} onChange={(f: number) => setStars(movie, f)} allowHalf allowClear={false} count={5} />
                </div>
            </div>
        </div>
    )
}

export default MovieItem;
