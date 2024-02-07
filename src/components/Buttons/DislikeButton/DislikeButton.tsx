import { DislikeButtonIcon } from './DislikeButtonIcon';
import { useAuthState } from '../../../store/auth/selector'
import styles from '../LikeButton/LikeButton.styles.module.scss'

type Props = {
    setMark: boolean
    isLiked: boolean
    isDisliked: boolean,
    dislike: () => void
    undo: () => void

    dislikes: string
}

export const DislikeButton = ({setMark, isLiked, isDisliked, dislike, undo, dislikes}: Props) => {
    const {isLoged} = useAuthState()
    return (
        <div className={styles.button_block}>
            <button disabled={isLoged ? false : true} onClick={setMark && isDisliked  ? undo : dislike} className={`${styles.dislike_button} ${styles.dis_change} ${isDisliked ? styles.set_disliked_post : ''} ${isLiked ? styles.shadow_button : ''}`}>
                <DislikeButtonIcon/>
            </button>
            <p>{isDisliked ? +dislikes + 1 : dislikes}</p>
        </div>
    )
}