import React, {FC, useContext} from 'react';
import { Row, Col } from 'antd';
import Context from '../context/context';
import { Movie } from '../types/types';

/* Components */
import MovieItem from '../MovieItem/MovieItem';

interface MoviesProps {
    movies: Array<Movie>,
    selectMovie: (movie: Movie) => void,
    setStars: (movie: Movie, starCount: number) => void
}

const MovieList : FC<MoviesProps> = ( {movies, selectMovie, setStars} ) => {
    const genres = useContext(Context).genres;

    return (
        <Row gutter={[32, 32]} wrap={true}>
            {movies.map(movie =>
                <Col key={movie.id} span={12}>
                    <MovieItem setStars={setStars} movie={movie} genres={genres} selectMovie={selectMovie} />
                </Col>
            )}
        </Row>
    )
}

export default MovieList;