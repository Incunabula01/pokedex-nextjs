

import { Pokemon } from 'pokenode-ts';
import { usePagination, DOTS, PaginationProps } from '../../hooks/usePagination';
import { ArrowIcon } from '../ArrowIcon/ArrowIcon';
import styles from './Pagination.module.scss';
import { useMemo, useState } from 'react';

type PropTypes = PaginationProps & {
    // data: Array<NamedAPIResource>;
    pokemonData: {}
}

const PAGE_SIZE = 8;

const Pagination = ({ 
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize
 }: PropTypes) => {
    // WIP
    const [pokemon, setPokemon] = useState<Pokemon>();
    const [currentPage, setCurrentPage] = useState(1);


    const currentPokeData = useMemo(() => {
        if (pokemonData.length > 0) {
            const firstPageIndex = (currentPage - 1) * PAGE_SIZE;
            const lastPageIndex = firstPageIndex + PAGE_SIZE;
            return pokemonData.slice(firstPageIndex, lastPageIndex);
        }
        return [];
    }, [currentPage, pokemonList]);

    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize
    });
    if (currentPage === 0 || (paginationRange || []).length < 2) {
        return null;
    }

    const onNext = () => {
        onPageChange(currentPage + 1);
    };

    const onPrevious = () => {
        onPageChange(currentPage - 1);
    };

    const lastPage = paginationRange ? paginationRange[paginationRange.length - 1] : null;
    return (
        <div className={styles['pagination-container']}>
            <ul>
                <li
                    className={styles['pagination-item']}
                >
                    <button className={styles['arrow-left']} disabled={currentPage === 1} onClick={onPrevious}>
                        <ArrowIcon width="auto" height="15"/>
                    </button>
                </li>
                {paginationRange && paginationRange.map(pageNumber => {

                    // If the pageItem is a DOT, render the DOTS unicode character
                    if (pageNumber === DOTS) {
                        // return <li className={styles[['pagination-item', ' dots'].join(',')]}>&#8230;</li>;
                        return <li className={styles['pagination-item']}>
                            <button disabled className={styles.dots}>&hellip;</button>
                        </li>
                    }

                    // Render our Page Pills
                    return (
                        <li
                            className={styles['pagination-item']}
                        >
                            <button onClick={() => onPageChange(pageNumber)} className={pageNumber === currentPage ? styles.selected : ''}>
                                {pageNumber}
                            </button>
                            
                        </li>
                    );
                })}
                <li
                    className={styles['pagination-item']}
                >
                    <button className={styles['arrow-right']} disabled={currentPage === lastPage} onClick={onNext}>
                        <ArrowIcon width="auto" height="15" />
                    </button>
                </li>
            </ul>
        </div>
        );
}

export default Pagination;