import React from 'react';
import styles from './PokeCard.module.scss';
import Link from 'next/link';

type PokeCardProps = {
    name: string;
}

const PokeCard = ({ name }: PokeCardProps) => {

    return (
        <Link href={`/${name}`}>
            <div className={styles['poke-card']} >
                <h3>{name}</h3>
            </div>
        </Link>
       
    )
}

export default PokeCard;