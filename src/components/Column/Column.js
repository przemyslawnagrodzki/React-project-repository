import styles from './Column.module.scss';
import CardForm from '../CardForm/CardForm';
import Card from '../Card/Card';
import List from '../List/List'
import {addCard} from '../List/List'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const Column = (props) => {
    const searchString = useSelector(state => state.searchString)
    const cards = useSelector(state => state.cards.filter(card => card.columnId === props.id && card.title.toLowerCase().includes(searchString.toLowerCase())))
    
    

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

