import React, {FC} from 'react';
import { Input } from 'antd';
import { InputEvent } from '../types/types';
import debounce from 'lodash/debounce';
import './MovieHeader.css';

interface MovieHeaderProps {
    setSearch: (e: string) => void
}

const MovieHeader : FC<MovieHeaderProps> = ({ setSearch }) => {
    const updateSearch = (e: InputEvent) => setSearch(e.target.value);
    const debounceSearch = debounce(updateSearch, 500);

    return (
        <Input 
            onChange={debounceSearch} 
            className='movie__header' 
            placeholder='Type to search...' 
        />
    );
}

export default MovieHeader;