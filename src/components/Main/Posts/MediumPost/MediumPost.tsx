import { LikeButton } from '../PostButtons/LikeButton/LikeButton'
import { DislikeButton } from '../PostButtons/DislikeButton/DislikeButton'
import { BookMarkButton } from '../PostButtons/BookMarkButton/BookMarkButton'
import { MoreButton } from '../PostButtons/MoreButton/MoreButton'
import styles from './MediumPost.styles.module.scss'
import mediumPost from '../../../../images/Posts/MediumPost.png'

type Post = {
    id: number
    date: string
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
        <div className={styles.mediumPost}>
            <div>
                <img className={post.image} src={mediumPost} alt="space"/>
            </div>
            <div>
                <h4>{post.date}</h4>
                <h3>{post.title}</h3>
            </div>
            <div className={styles.allButtons}>
                <div className={styles.buttons}>
                    <LikeButton/>
                    <DislikeButton/>
                </div>
                <div className={styles.buttons}>
                    <BookMarkButton/>
                    <MoreButton/>
                </div>
            </div>
        </div>
    )
}