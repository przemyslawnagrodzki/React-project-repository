
import styles from './Card.module.scss'
import { toggleCardFavorite } from '../../redux/store';
import { useDispatch } from 'react-redux';
import clsx from 'clsx';
import { useState } from 'react';

const Card = ({ id, title, isFavorite }) => {
    const dispatch = useDispatch();
    const toggleFavorite = () => {
        dispatch(toggleCardFavorite({ id }));
    };


    return (

        <li className={styles.card}>{title}
            <div>
                <button
                    onClick={toggleFavorite}
                    className={clsx(styles.btn, isFavorite && styles.activeFavorite)}
                >
                    <span className="fa fa-solid fa-star-o"></span>
                </button>
            </div >
        </li>
    )
}

export default Card;