import styles from './SearchForm.module.scss'
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import InitialState from '../../redux/InitialState'
import { useDispatch } from 'react-redux';
import { useState , useEffect} from 'react';
import { useSelector } from 'react-redux';
import { searchString } from '../../redux/InitialState'
import { updateSearchString, resetSearchString } from '../../redux/store'


const SearchForm = () => {
    const [string, setString] = useState('')
    const dispatch = useDispatch()

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(updateSearchString(string))
        setString('')
    }

    return (
        <form className={styles.searchForm} onSubmit={handleSubmit}>
            <TextInput placeholder="Search..." ></TextInput>
            <Button>
                <span className="fa fa-search" />
            </Button>
        </form>
    );
};

export default SearchForm;