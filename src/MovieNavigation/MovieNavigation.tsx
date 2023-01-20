import React, { FC } from 'react';
import './MovieNavigation.css';

interface MovieNavigationProps {
    rated: boolean,
    changePage: (arg: boolean) => void
}


const MovieNavigation : FC<MovieNavigationProps> = ({ rated, changePage }) => {

    return (
        <ul className="movie__nav">
            <li onClick={() => changePage(false)} className={rated ? "movie__nav--item" : "movie__nav--item active"}>Search</li>
            <li onClick={() => changePage(true)} className={rated ? "movie__nav--item active" : "movie__nav--item"}>Rated</li>
        </ul>
    )
}

export default MovieNavigation;