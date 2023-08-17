import { PokemonClient, NamedAPIResourceList, Pokemon } from "pokenode-ts";

export async function getData() {
    const api = new PokemonClient();
    try {
        const res: NamedAPIResourceList = await api.listPokemons(0, 20);
        return res;
    } catch (error) {
        throw new Error(`Something went wrong! ${error}`);
    }
}

export async function fetchPokemon(selectedPokemon: string){
    try {
        const response = await fetch(selectedPokemon);
        const pokemon: Pokemon = await response.json();
        return pokemon;
    } catch (error) {
        throw new Error(`Something went wrong! ${error}`);
    }
}