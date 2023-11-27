import { LikeButtonIcon } from './LikeButtonIcon'
import styles from './LikeButton.styles.module.scss'

export const LikeButton = () => {
    return (
        <div>
            <button className={styles.likeButton}>
                <LikeButtonIcon/>
            </button>
        </div>
    )
}