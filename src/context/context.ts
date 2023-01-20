import React from 'react';
import {Genre} from "../types/types";

export interface GenresContext {
    genres: Array<Genre>
}

const Context = React.createContext<GenresContext>({
    genres: [
        {id: 28, body: 'Action'},
        {id: 12, body: 'Adventure'},
        {id: 16, body: 'Animation'},
        {id: 35, body: 'Comedy'},
        {id: 80, body: 'Crime'},
        {id: 99, body: 'Documentary'},
        {id: 18, body: 'Drama'},
        {id: 10751, body: 'Family'},
        {id: 14, body: 'Fantasy'},
        {id: 36, body: 'History'},
        {id: 27, body: 'Horror'},
        {id: 10402, body: 'Music'},
        {id: 9648, body: 'Mystery'},
        {id: 10749, body: 'Romance'},
        {id: 878, body: 'Science Fiction'},
        {id: 10770, body: 'TV Movie'},
        {id: 53, body: 'Thriller'},
        {id: 10752, body: 'War'},
        {id: 37, body: 'Western'}
    ]
});

export default Context;