import styles from './Column.module.scss';
import CardForm from '../CardForm/CardForm';
import Card from '../Card/Card';
import { useSelector } from 'react-redux';
import { getFilteredCards } from '../../redux/searchStringRedux';

const Column = (props) => {
    const cards = useSelector(state => getFilteredCards(state, props.id));



    return (
        <article className={styles.column}>
            <span className={styles.icon + ' fa fa-' + props.icon} />
            <h2 className={styles.title}>{props.title}</h2>
            < ul className={styles.titles} >
                {cards.map(card => <Card key={card.id} {...card} />)}
            </ul >
            <CardForm columnId={props.id} />
        </article>
    )
}


export default Column
