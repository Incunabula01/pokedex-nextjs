import React from 'react';
import styles from './PokeCard.module.scss';

type PokeCardProps = {
    url: string;
    name: string;
    onCardSelect: (name: string) => void;
}

const PokeCard = ({ url, name, onCardSelect }: PokeCardProps) => {
    const handleCardClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const getName = e.currentTarget.dataset.name || '';
        onCardSelect(getName);
    }
    return (
        <div className={styles['poke-card']} onClick={handleCardClick} data-name={url}>
           <h3>{name}</h3>
        </div>
    )
}

export default PokeCard;