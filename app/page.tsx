// import Image from 'next/image'
import { PokemonClient, Pokemon, NamedAPIResource } from "pokenode-ts";
import { getPokemonList } from "./api/api";

import PokedexContainer from "./components/Pokedex/PokedexContainer";

export default async function Home() {
  const data: Array<NamedAPIResource> = await getPokemonList();

  return (
    <>
     <PokedexContainer pokeData={data}/>
      {/* <section className={styles['pokedex-pagination']}> */}
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
      {/* </section> */}
    </>    
  )
}


