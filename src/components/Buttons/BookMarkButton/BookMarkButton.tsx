import { BookMarkButtonIcon } from './BookMarkButtonIcon'
import styles from './BookMarkButton.styles.module.scss'

type Props = {
    disabled?: boolean
}


export const BookMarkButton = (props: Props) => {
    const {disabled = false} = props
    return (
        <div>
            <button className={styles.bookMarkButton} disabled={disabled}>
                <BookMarkButtonIcon/>
            </button>
        </div>
    )
}