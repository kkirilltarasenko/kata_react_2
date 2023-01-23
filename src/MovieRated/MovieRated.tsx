import React, {FC} from 'react';
import {Col, Empty, Row} from 'antd';
import './MovieRated.css';
import MovieItem from "../MovieItem/MovieItem";
import {Movie} from "../types/types";

interface MovieRatedProps {
    movies: Movie[],
    setStars: (movie: Movie, starCount: number) => void
}


const MovieRated : FC<MovieRatedProps> = ({ movies, setStars }) => {
    return movies.length !== 0 ? (
        <div>
            <Row gutter={[32, 32]}>
                {movies.map(movie =>
                    <Col key={movie.id + Math.random()} span={12}>
                        <MovieItem setStars={setStars} movie={movie} />
                    </Col>
                )}
            </Row>
        </div>
    ) : (
        <div className="rated__empty">
            <Empty description="No movies here." />
        </div>
    )
}

export default MovieRated;