import styles from './Card.module.scss'
import { toggleCardFavorite } from '../../redux/store';
import { useDispatch } from 'react-redux';
import clsx from 'clsx';

const Card = ({ title, id, isFavorite }) => {
    const dispatch = useDispatch();
    const toggleFavorite = () => {
        dispatch(toggleCardFavorite({ id, isFavorite }));
    }

    return (

        <li className={styles.cards}>{title}
            <span>
                <button className={clsx(styles.btn, isFavorite && styles.isFavorite)} onClick={toggleFavorite}><i className='fa fa-solid fa-star-o'></i ></button >
            </span >
        </li>
    )
}

export default Card;