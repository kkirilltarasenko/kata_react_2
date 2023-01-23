import React, { FC, useContext } from "react";
import { Row, Col } from "antd";
import { Movie } from "../types/types";

/* Components */
import MovieItem from "../MovieItem/MovieItem";
import MovieContext from "../context/movieContext";

interface MoviesProps {
  selectMovie: (movie: Movie) => void;
  setStars: (movie: Movie, starCount: number) => void;
}

const MovieList: FC<MoviesProps> = ({ selectMovie, setStars }) => {
  const movies = useContext(MovieContext);

  return (
    <Row gutter={[32, 32]} wrap={true}>
      {movies.map((movie) => (
        <Col key={movie.id} span={12}>
          <MovieItem setStars={setStars} movie={movie} selectMovie={selectMovie} />
        </Col>
      ))}
    </Row>
  );
};

export default MovieList;
