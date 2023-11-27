import { SearchIcon } from './SearchIcon'
import styles from './Search.styles.module.scss'

export const Search = () => {
    return (
        <button className={styles.search}>
            <SearchIcon/>
        </button>
    )
}