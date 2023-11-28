import { LikeButton } from '../PostButtons/LikeButton/LikeButton'
import { DislikeButton } from '../PostButtons/DislikeButton/DislikeButton'
import { BookMarkButton } from '../PostButtons/BookMarkButton/BookMarkButton'
import { MoreButton } from '../PostButtons/MoreButton/MoreButton'
import styles from './BigPost.styles.module.scss'
import bigPost from '../../../../images/Posts/BigPost.png'

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

export const BigPost = (props: Props) => {
    const {post} = props
    return (
        <div className={styles.bigPost}>
            <div>
                <h3>{post.date}</h3>
                <h2>{post.title}</h2>
                <p>{post.description}</p>
            </div>
            <div>
                <img className={post.image} src={bigPost} alt="space" />
            </div >
            <div className={styles.buttons}>
                <LikeButton/>
                <DislikeButton/>
            </div>
            <div className={styles.buttons}>
                <BookMarkButton/>
                <MoreButton/>
            </div>
        </div>
    )
}