import React, {FC} from 'react';
import { Input } from 'antd';
import debounce from 'lodash/debounce';
import './MovieHeader.css';

interface MovieHeaderProps {
    setSearch: (e: string) => void
}

const MovieHeader : FC<MovieHeaderProps> = ({ setSearch }) => {
    const updateSearch = (e: any) => setSearch(e?.target?.value);
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