"use client"
import React, { useState } from 'react';

import SearchBox from '../Search/SearchBox';
import PokeList from './Pokelist';

import { NamedAPIResource } from "pokenode-ts";

const PokedexContainer = ({ pokeData }: { pokeData: Array<NamedAPIResource>}) => {
    
    const [searchText, setSearchText] = useState<string>('');
    const searchFilter = (pokemonList: Array<NamedAPIResource>) => (pokemonList.filter(el => el.name.toLowerCase().includes(searchText)));
    const filteredPokemonData = searchFilter(pokeData);

    return (
        <>
            <SearchBox onQueryChange={(value) => setSearchText(value)} />
            <PokeList pokeData={filteredPokemonData} />
        </>

    )
}

export default PokedexContainer;