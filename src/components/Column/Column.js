import styles from './Column.module.scss';
import CardForm from '../CardForm/CardForm';
import Card from '../Card/Card';
import List from '../List/List'
import {addCard} from '../List/List'

const Column = (props) => {
    return (
        <article className={styles.column}>
            <span className={styles.icon + ' fa fa-' + props.icon} />
            <h2 className={styles.title}>{props.title}</h2>
            < ul className={styles.titles} >
                {props.cards.map(card => <li key={card.id}>{card.title}</li>)}
            </ul >
            <CardForm columnId={props.id} action={props.addCard} />
        </article>
    )
}

export default Column

