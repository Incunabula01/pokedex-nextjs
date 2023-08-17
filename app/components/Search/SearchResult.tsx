import styles from './SearchResult.module.scss';
import { Pokemon } from 'pokenode-ts';
import pokeballDefault from '../../Assets/pokeball.png';

type SearchResultProps = {
    selectedPokemon: Pokemon | any;
}
const SearchResult = ({selectedPokemon}: SearchResultProps) => {
   const getUrl = (): string => {
       if (selectedPokemon.sprites.versions["generation-v"]["black-white"].animated.front_default){
           return selectedPokemon.sprites.versions["generation-v"]["black-white"].animated.front_default;
       }
       if (selectedPokemon.sprites.front_default){
           return selectedPokemon.sprites.front_default;
       }
       return pokeballDefault;
   }
    return (
        <div className={styles['poke-result-card']}>
        {selectedPokemon ?
                (
                    <>
                        <img src={getUrl()} alt={selectedPokemon.name} />
                        <h2>{selectedPokemon.name}</h2>
                        <p>Id: {selectedPokemon.id}</p>
                        <p>Height: {selectedPokemon.height}</p>
                        <p>Weight: {selectedPokemon.weight}</p>
                        <p>Base Exp: {selectedPokemon.base_experience ?? 0}</p>
                    </>
                )
                :
                    <>
                        <h2>Welcome to the Pokedex!</h2>
                    </>
        }
       </div>
    )
}

export default SearchResult;