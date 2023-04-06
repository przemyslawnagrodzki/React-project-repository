import styles from './Card.module.scss'
import { toggleCardFavorite } from '../../redux/cardsRedux';
import { useDispatch } from 'react-redux';
import clsx from 'clsx';
import { removeCard } from '../../redux/cardsRedux';

const Card = ({ id, title, isFavorite }) => {
    const dispatch = useDispatch();
    const toggleFavorite = () => {
        dispatch(toggleCardFavorite(id));
    };

    const remove = () => {
        dispatch(removeCard(id))
    }

    return (

        <li className={styles.card}>{title}
            <div>
                <button
                    onClick={toggleFavorite}
                    className={clsx(styles.btn, isFavorite && styles.activeFavorite)}
                >
                    <span className="fa fa-solid fa-star-o"></span>
                </button>
                <button
                    onClick={remove}
                    className={styles.btn}
                >
                    <span className="fa fa-solid fa-trash"></span>
                </button>
            </div >
        </li>
    )
}

export default Card;