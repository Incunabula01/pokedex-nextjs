import React, { useState, useEffect, useMemo, useCallback } from 'react';

import SearchBox from '../Search/SearchBox';
import PokeList from './Pokelist';
import SearchResult from '../Search/SearchResult';
import { getData } from '@/app/page';

import styles from './PokedexContainer.module.scss';
import { asyncLoader } from '../../utils';

import { PokemonClient, Pokemon, NamedAPIResource, NamedAPIResourceList } from "pokenode-ts";
import Pagination from '../Pagination/Pagination';

const PAGE_SIZE = 8;



const PokedexContainer = async () => {
    const data: NamedAPIResourceList = await getData();
    // const [pokemonList, setPokemonList] = useState<Array<NamedAPIResource>>([]);

    // const [selectedPokemon, setSelectedPokemon] = useState<string>('');
    // const [pokemon, setPokemon] = useState<Promise<Pokemon> | null>(null);
    // const [currentPage, setCurrentPage] = useState(1);

    // const fetchLists = useCallback(async (searchQuery: string) => {

    //     const api = new PokemonClient();
    //     const pokeList: Array<NamedAPIResource> = [];

    //     asyncLoader({ type: 'start', container: 'list', width: '100', height: '100' });

    //     await api.listPokemons(0, -1)
    //         .then((data: NamedAPIResourceList) => {
    //             data.results.forEach(item => {
    //                 pokeList.push(item);
    //             })

    //             if (searchQuery !== 'all') {
    //                 const filteredData = pokemonList.filter(el => el.name.includes(searchQuery));
    //                 setPokemonList(filteredData);
    //             } else {
    //                 setPokemonList(pokeList);
    //             }

    //             asyncLoader({ type: 'stop', container: 'list', width: '0', height: '0' });
    //         })
    //         .catch(error => {
    //             console.error(error);
    //         });


    // }, [pokemonList]);

    // useMemo(() => {
    //     if (pokemonList.length === 0) {
    //         fetchLists('all');
    //     }

    // }, [fetchLists, pokemonList]);

    // useEffect(() => {
    //     if (selectedPokemon) {
    //         asyncLoader({ type: 'start', container: 'searchResult', width: '50', height: '50' });
    //         const fetchPokemon = async () => {
    //             const response = await fetch(selectedPokemon);
    //             const body = await response.json();
    //             setPokemon(body);
    //             asyncLoader({ type: 'stop', container: 'searchResult', width: '0', height: '0' });
    //         }
    //         fetchPokemon();
    //     }
    // }, [selectedPokemon]);

    // const currentPokeData = useMemo(() => {
    //     if (pokemonData.length > 0) {
    //         const firstPageIndex = (currentPage - 1) * PAGE_SIZE;
    //         const lastPageIndex = firstPageIndex + PAGE_SIZE;
    //         return pokemonData.slice(firstPageIndex, lastPageIndex);
    //     }
    //     return [];
    // }, [currentPage, pokemonList]);

    // const handleSearchQuery = (value: string) => {
    //     const searchQuery = value ? value : 'all';
    //     fetchLists(searchQuery);
    //     setPokemon(null);
    // }
    console.count('Event fired!');
    console.log(data);
    return (
        <>
            <section className={styles['pokedex-container']}>
                <div className={styles['pokelist-container']} id="list">
                    {/* <SearchBox onQueryChange={handleSearchQuery} /> */}
                    <PokeList pokeData={data.results} 
                    // onSelect={(name) => setSelectedPokemon(name)} 
                    />
                </div>
                <div className={styles['poke-search-result-container']} id="searchResult">
                    {/* <SearchResult selectedPokemon={pokemon} /> */}
                </div>
            </section>
            <section className={styles['pokedex-pagination']}>
                {/* <Pagination
                    currentPage={currentPage}
                    totalCount={pokemonList.length}
                    pageSize={PAGE_SIZE}
                    siblingCount={2}
                    onPageChange={page => {
                        if (typeof page === 'number') {
                            setCurrentPage(page);
                        }
                    }} /> */}
            </section>
        </>

    )
}

export default PokedexContainer;