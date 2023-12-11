import { LikeButton } from '../../../Buttons/LikeButton/LikeButton'
import { DislikeButton } from '../../../Buttons/DislikeButton/DislikeButton'
import { BookMarkButton } from '../../../Buttons/BookMarkButton/BookMarkButton'
import { MoreButton } from '../../../Buttons/MoreButton/MoreButton'
import styles from './SmallPost.styles.module.scss'

type Post = {
    id: number
    date: Date
    title: string
    description: string
    image: string
}

type Props = {
    post: Post
}

export const SmallPost = (props: Props) => {
    const {post} = props
    return (
        <div className={styles.small_post}>
            <div>
                <h4>{new Date(post.date).toLocaleDateString()}</h4>
                <h3>{post.title}</h3>
            </div>
            <div className={styles.small_post_img}>
                <img src={post.image} alt="Astronaut"/>
            </div>
            <div className={styles.all_buttons}>
                <div>
                    <div className={styles.like_buttons}>
                        <LikeButton/>
                    </div>
                    <DislikeButton/>
                </div>
                <div className={styles.mark_buttons}>
                    <BookMarkButton/>
                    <MoreButton/>
                </div>
            </div>
        </div>
    )
}