import { BookMarkButtonIcon } from './BookMarkButtonIcon'
import styles from './BookMarkButton.styles.module.scss'

export const BookMarkButton = () => {
    return (
        <div>
            <button className={styles.bookMarkButton}>
                <BookMarkButtonIcon/>
            </button>
        </div>
    )
}