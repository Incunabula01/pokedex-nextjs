import { PokemonClient, NamedAPIResourceList, Pokemon } from "pokenode-ts";

export async function getPokemonList(){
    const api = new PokemonClient();
    try {
            const res: NamedAPIResourceList = await api.listPokemons(0, 151);
            return res.results;
    } catch (error) {
        throw new Error(`Something went wrong! ${error}`);
    }
}

export async function fetchPokemon(selectedPokemon: string){
    if(selectedPokemon !== ''){
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`);
            const pokemon: Promise<Pokemon> = await response.json();
            return pokemon;
        } catch (error) {
            throw new Error(`Something went wrong! ${error}`);
        }
    }
}