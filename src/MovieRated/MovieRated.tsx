import React, { FC } from 'react';
import { Empty } from 'antd';
import './MovieRated.css';

interface MovieRatedProps {
    movies: any[]
}


const MovieRated : FC<MovieRatedProps> = ({ movies }) => {
    return movies.length !== 0 ? (
        <div>Rated</div>
    ) : (
        <div className="rated__empty">
            <Empty description="No movies here." />
        </div>
    )
}

export default MovieRated;