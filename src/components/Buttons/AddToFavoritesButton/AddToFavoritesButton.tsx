import { BookMarkButtonIcon } from '../BookMarkButton/BookMarkButtonIcon'
import styles from './AddToFav.styles.module.scss'

export const AddToFavoritesButton = () => {
    return (
        <button className={styles.add_to_fav_button}>
            <BookMarkButtonIcon/>
            <p>Add to favorites</p>
        </button>
    )
}
