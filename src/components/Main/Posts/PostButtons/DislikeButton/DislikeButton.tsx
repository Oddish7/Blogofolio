import { DislikeButtonIcon } from './DislikeButtonIcon'
import styles from './DislikeButton.styles.module.scss'

export const DislikeButton = () => {
    return (
        <div>
            <button className={styles.dislikeButton}>
                <DislikeButtonIcon/>
            </button>
        </div>
    )
}