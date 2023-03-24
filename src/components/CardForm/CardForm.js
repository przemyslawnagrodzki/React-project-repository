import styles from './CardForm.module.scss';
import { useState } from 'react';
import Button from './../Button/Button';
import TextInput from './../TextInput/TextInput';
import { addCard } from '../List/List'
import { useDispatch } from 'react-redux';

const CardForm = props => {
    const [title, setTitle] = useState('');
    const dispatch = useDispatch();
    const handleSubmit = e => {
        e.preventDefault();
        setTitle('');
        dispatch({ type: 'ADD_CARD', payload: { title } });
    };

    return (
        <form className={styles.cardForm} onSubmit={handleSubmit}>
            <span className={styles.titleInput}>Title:</span>
            <TextInput value={title} onChange={e => setTitle(e.target.value)} />
            <Button>Add card</Button>
        </form>
    );
};

export default CardForm;