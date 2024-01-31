import { LikeButtonIcon } from './LikeButtonIcon'
import styles from './LikeButton.styles.module.scss';

type Props = {
    setMark: boolean
    isLiked: boolean
    isDisliked: boolean,
    like: () => void
    undo: () => void

    likes: string 
}

export const LikeButton = ({setMark, isLiked, isDisliked, like, undo, likes}: Props) => {
    return (
        <div className={styles.button_block}>
            <button onClick={setMark && isLiked ? undo : like} className={`${styles.like_button} ${styles.like_change} ${isLiked ? styles.set_liked_post : ''} ${isDisliked ? styles.shadow_button : ''}`}>
                <LikeButtonIcon/>
            </button>
            <p>{isLiked ? +likes + 1 : likes }</p>
        </div>
    )
}