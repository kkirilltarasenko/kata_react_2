export interface Movie {
    id: number,
    original_title: string,
    overview: string,
    poster_path: string,
    release_date: string,
    genre_ids: number[],
    vote_average: number,
    stars: number
}

export interface Genre {
    id: number,
    body: string
}