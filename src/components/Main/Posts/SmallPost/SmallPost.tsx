import { LikeButton } from '../PostButtons/LikeButton/LikeButton'
import { DislikeButton } from '../PostButtons/DislikeButton/DislikeButton'
import { BookMarkButton } from '../PostButtons/BookMarkButton/BookMarkButton'
import { MoreButton } from '../PostButtons/MoreButton/MoreButton'
import styles from './SmallPost.styles.module.scss'
import smallPost from '../../../../images/Posts/SmallPost.png'

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

export const SmallmPost = (props: Props) => {
    const {post} = props
    return (
        <div className={styles.smallPost}>
            <div className={styles.top}>
                <div>
                    <h4>{post.date}</h4>
                    <h3>{post.title}</h3>
                </div>
                <img className={post.image} src={smallPost} alt="space"/>
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