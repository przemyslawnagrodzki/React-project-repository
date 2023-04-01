import { addList } from '../../redux/store'
import { useState } from 'react';
import Button from '../Button/Button'
import TextInput from '../TextInput/TextInput'
import { useDispatch } from 'react-redux';
import styles from './ListForm.module.scss';

const ListForm = ( {listId} ) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const dispatch = useDispatch();
   
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addList({ title, description, listId}));
        setTitle('');
        setDescription('');
     };

     return (
        <form className={styles.listForm} onSubmit={handleSubmit}>
            <span className={styles.titleDescriptionInput}>Title:</span>
            <TextInput value={title} onChange={e => setTitle(e.target.value)} />
            <span className={styles.titleDescriptionInput}>Description:</span>
            <TextInput className={styles.titleDescriptionInput} value={description} onChange={e => setDescription(e.target.value)} />
            <Button>Add list</Button>
        </form>
    );

}

export default ListForm