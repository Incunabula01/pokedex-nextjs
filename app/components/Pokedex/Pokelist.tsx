"use client";
import { NamedAPIResource } from 'pokenode-ts';
import PokeCard from './PokeCard';

import styles from './Pokelist.module.scss';

type PokeListProps = {
    pokeData: Array<NamedAPIResource>;
    onSelect?: (name: string) => void;
}

const PokeList = ({ pokeData, onSelect }: PokeListProps) => (
    <ul className={styles['poke-list-grid']}>
        {pokeData.map((el, i) => {
            return (
                <li key={i}>
                    <PokeCard name={el.name} url={el.url} onCardSelect={(name) => onSelect(name)} />
                </li>
            )
        })}
    </ul>
);

export default PokeList;