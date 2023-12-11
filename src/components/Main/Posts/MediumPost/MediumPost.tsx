import { LikeButton } from '../../../Buttons/LikeButton/LikeButton'
import { DislikeButton } from '../../../Buttons/DislikeButton/DislikeButton'
import { BookMarkButton } from '../../../Buttons/BookMarkButton/BookMarkButton'
import { MoreButton } from '../../../Buttons/MoreButton/MoreButton'
import styles from './MediumPost.styles.module.scss'

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

export const MediumPost = (props: Props) => {
    const {post} = props
    return (
        <div className={styles.middle_post}>
            <div className={styles.middle_post_img}>
                <img src={post.image} alt="Astronaut"/>
            </div>
            <h4>{new Date(post.date).toLocaleDateString()}</h4>
            <h3>{post.title}</h3>
            <div className={styles.buttons_block}>
                <div className={styles.buttons_block__inner}>
                    <div className={styles.button_space}>
                        <LikeButton/>
                    </div>
                    <DislikeButton/>
                </div>
                <div>
                    <BookMarkButton/>
                    <MoreButton/>
                </div>
            </div>
        </div>
    )
}