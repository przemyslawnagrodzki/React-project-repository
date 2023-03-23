import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button'
import TextInput from '../TextInput/TextInput'
import { useDispatch } from 'react-redux';
import shortid from 'shortid';

const ColumnForm = props => {
    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState('');
    const dispatch = useDispatch();
    const handleSubmit = e => {
        e.preventDefault();
        dispatch({ type: 'ADD_COLUMN', payload: { title, icon } });
        setTitle('');
        setIcon('');
     };

    

    return (
        <form className={styles.columnForm} onSubmit={handleSubmit}>
            <span className={styles.titleIconInput}>Title:</span>
            <TextInput value={title} onChange={e => setTitle(e.target.value)} />
            <span className={styles.titleIconInput}>Icon:</span>
            <TextInput className={styles.titleIconInput} value={icon} onChange={e => setIcon(e.target.value)} />
            <Button>Add column</Button>
        </form>
    );
};

export default ColumnForm;