"use client";

import { NamedAPIResource } from 'pokenode-ts';
import PokeCard from './PokeCard';

type PokeListProps = {
    pokeData: Array<NamedAPIResource>;
}

const PokeList =  ({ pokeData }: PokeListProps) => {

    return (<ul className="grid grid-cols-3 grid-flow-row place-items-center list-none">
        {pokeData.map((el, i) => {
            return (
                <li key={i}>
                    <PokeCard name={el.name}  />
                </li>
            )
        })}
    </ul>)
};

export default PokeList;