import pokeballDefault from 'public/pokeball.png';
import styles from './page.module.scss';
import { fetchPokemon } from '../api/api';
import PokemonImage from '../components/Utils/PokemonImage';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

type PokemonPageProps = {
    params: { pokemonName: string }
}
export default async function PokemonPage({ params }: PokemonPageProps) {
    const { pokemonName } = params;
    const pokemonObject = await fetchPokemon(pokemonName);
    const pokeBall = pokeballDefault as StaticImport;
    const pokemanImg: string | StaticImport  = pokemonObject?.sprites?.versions ? pokemonObject.sprites.versions["generation-v"]["black-white"].animated.front_default : pokeBall;

    return (
        pokemonObject &&  
            <div className={styles['poke-result-card']}>
                    <div className="m-2">
                        <PokemonImage image={pokemanImg} name={pokemonObject.name} width={200} height={200} />
                    </div>
                    <h2>{pokemonObject.name}</h2>
                    <p>Id: {pokemonObject.id}</p>
                    <p>Height: {pokemonObject.height}</p>
                    <p>Weight: {pokemonObject.weight}</p>
                    <p>Base Exp: {pokemonObject.base_experience ?? 0}</p>
                    <div className="flex-col m-2">
                        {pokemonObject.stats.map(statObj => {
                            const statName = statObj.stat.name,
                                statValue = statObj.base_stat;

                            return (
                                <div className="flex items-stretch" style={{ width: '600px' }} key={statName}>
                                    <h4 className="p-3 w-2/4">
                                        {statName}: {statValue}
                                    </h4>
                                    <div className={`${styles.slider} w-2/4 m-auto rounded-full h-2.5`}>
                                        <div className="h-2.5 rounded-full" style={{ width: `${statValue}%` }}></div>
                                    </div>
                                </div>

                            )
                        })}
                    </div>

            </div>
               
        
        
    )
}
