import { MoreButtonIcon } from './MoreButtonIcon'
import styles from './MoreButton.styles.module.scss'

export const MoreButton = () => {
    return (
        <div>
            <button className={styles.moreButton}>
                <MoreButtonIcon/>
            </button>
        </div>
    )
}