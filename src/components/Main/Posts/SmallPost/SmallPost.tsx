import { BookMarkButton } from '../../../Buttons/BookMarkButton/BookMarkButton'
import { MoreButton } from '../../../Buttons/MoreButton/MoreButton'
import { Link } from 'react-router-dom'
import { LikeAndDislikeButtonsWrapper } from '../../../Buttons/LikeAndDislikeButtonsWrapper/LikeAndDislikeButtonsWrapper'
import { Posts } from '../../Tabs/TabContent/TabContent'
import { MoreInnerButtons } from '../../../Buttons/MoreInnerButtons/MoreInnerButtons'
import { useMoreState } from '../../../../store/more/selector'
import styles from './SmallPost.styles.module.scss'

type Props = {
    post: Posts
    searchRes?: boolean
    openImage?: () => void
}

export const SmallPost = (props: Props) => {
    const {post, searchRes = false, openImage} = props
    const moreState = useMoreState(post.id.toString())
    const {more} = moreState || {}
    return (
        <div className={`${styles.small_post} ${searchRes ? styles.search_results : null}`} id={post.id.toString()}>
            <div>
                <h4>{new Date(post.date).toLocaleDateString()}</h4>
                <Link to={`openpost/${post.id}`}>
                    <h3>{post.title}</h3>
                </Link>
            </div>
            <div className={styles.small_post_img}>
                <img alt={`post ${post.id}`} src={post.image} onClick={openImage}/>
            </div>
            <div className={styles.all_buttons}>
                <div>
                    <LikeAndDislikeButtonsWrapper likes={post.likes} dislikes={post.dislikes} postId={post.id.toString()}/>
                </div>
                <div className={styles.mark_buttons}>
                    <BookMarkButton postId={post.id.toString()}/>
                    <MoreButton postId={post.id.toString()} title={post.title} description={post.description}/>
                    {
                        more! ?
                        <MoreInnerButtons postId={post.id.toString()} typeOfPost='more_small_post'/> :
                        null
                    }
                </div>
            </div>
        </div>
    )
}