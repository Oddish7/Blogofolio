import { useState } from 'react'
import { LikeButtonIcon } from './LikeButtonIcon'
import styles from './LikeButton.styles.module.scss'

type Props = {
    disabled?: boolean
}

export const LikeButton = (props: Props) => {
    let {disabled = false} = props
    let [like, setLike] = useState<number>(20)
    let [likedFlag, setLikedFlag] = useState<boolean>(false)
    
    const likedPost = () => {
        return likedFlag ? (
            setLike(like - 1),
            setLikedFlag(!likedFlag)
        ) : (
            setLike(like + 1),
            setLikedFlag(!likedFlag)
        )
    }
    return (
        <div className={styles.button_block}>
            <button onClick={likedPost}  className={`${styles.like_button} ${styles.like_change} ${likedFlag ? styles.set_liked_post : ''}`} disabled={disabled}>
                <LikeButtonIcon/>
            </button>
            <p>{like ? like : ''}</p>
        </div>
    )
}