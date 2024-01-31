import { useDispatch, useSelector } from 'react-redux'
import { ClearTextAction, SearchTextAction } from '../../../store/search/action'
import { searchPosts } from '../../../store/search/selector'
import { DeleteIcon } from './DeleteIcon'
import styles from './HeaderInput.styles.module.scss'

export const HeaderInput = () => {
    const {forSearch} = useSelector(searchPosts)
    const dispatch = useDispatch()
    const clear = () => dispatch(ClearTextAction(''))

    const inputChange = (e: React.FormEvent<HTMLInputElement>) => {
        dispatch(SearchTextAction(e.currentTarget.value))
    };

    return (
        <div className={styles.header_input}>
            <input autoComplete='off' placeholder='Search...' type="text" onInput={inputChange} value={forSearch || ''} id="header-input" />
            <button onClick={clear}>
                {<DeleteIcon />}
            </button>
        </div>
    )
}