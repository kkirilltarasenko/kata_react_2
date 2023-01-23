import React from "react";

export interface FetchResults {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export interface Movie {
  genre_ids: number[];
  id: number;
  original_title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  title: string;
  vote_average: number;
  stars: number;
}

export interface Genre {
  id: number;
  body: string;
}

export type InputEvent = React.ChangeEvent<HTMLInputElement>;
