"use client";
import React from 'react';
import styles from './SearchBox.module.scss';

type SearchBoxProps = {
    onQueryChange: (query: string) => void;
}

const SearchBox = ({ onQueryChange }: SearchBoxProps) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>)=> {
        onQueryChange(event.currentTarget.value);
    }
    return (
        <div className={styles.search}>
            <input id="searchInput" type="search" placeholder='Search Pokemons' onChange={handleChange}/>
        </div>
    )
}

export default SearchBox;