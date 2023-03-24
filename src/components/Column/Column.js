import styles from './Column.module.scss';
import CardForm from '../CardForm/CardForm';
import Card from '../Card/Card';
import List from '../List/List'
import {addCard} from '../List/List'
import { useSelector } from 'react-redux';

const Column = (props) => {

    const cards = useSelector(state => state.cards.filter(card => card.columnId === props.id));

    return (
        <article className={styles.column}>
            <span className={styles.icon + ' fa fa-' + props.icon} />
            <h2 className={styles.title}>{props.title}</h2>
            < ul className={styles.titles} >
                {cards.map(card => <li key={card.id}>{card.title}</li>)}
            </ul >
            <CardForm columnId={props.id} />
        </article>
    )
}


export default Column

