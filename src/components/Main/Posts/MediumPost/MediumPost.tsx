import { BookMarkButton } from '../../../Buttons/BookMarkButton/BookMarkButton'
import { MoreButton } from '../../../Buttons/MoreButton/MoreButton'
import { Link } from 'react-router-dom'
import { LikeAndDislikeButtonsWrapper } from '../../../Buttons/LikeAndDislikeButtonsWrapper/LikeAndDislikeButtonsWrapper'
import { Posts } from '../../Tabs/TabContent/TabContent'
import { MoreInnerButtons } from '../../../Buttons/MoreInnerButtons/MoreInnerButtons'
import { useMoreState } from '../../../../store/more/selector'
import styles from './MediumPost.styles.module.scss'

type Props = {
    post: Posts
    openImage: (id: number) => void
}

export const MediumPost = (props: Props) => {
    const {post, openImage} = props
    const moreState = useMoreState(post.id.toString())
    const {more} = moreState || {}

    return (
        <div className={styles.middle_post} id={post.id.toString()}>
            <div className={styles.middle_post_img}>
                <img src={post.image} alt="Astronaut" onClick={() => openImage(post.id)}/>
            </div>
            <h4>{new Date(post.date).toLocaleDateString()}</h4>
            <Link to={`openpost/${post.id}`}>
                <h3>{post.title}</h3>
            </Link>
            <div className={styles.buttons_block}>
                <div className={styles.buttons_block__inner}>
                    <LikeAndDislikeButtonsWrapper likes={post.likes} dislikes={post.dislikes} postId={post.id.toString()}/>
                </div>
                <div>
                    <BookMarkButton postId={post.id.toString()}/>
                    <MoreButton postId={post.id.toString()}/>
                </div>
            </div>
            {
                more! ?
                <MoreInnerButtons typeOfPost='more_middle_post'/> : null
            }
        </div>
    )
}