import { useDispatch, useSelector } from 'react-redux'
import { MediumPost } from '../MediumPost/MediumPost'
import { SmallPost } from '../SmallPost/SmallPost'
import { Posts } from '../../Tabs/TabContent/TabContent'
import { CloseImageAction, OpenImageAction } from '../../../../store/postImage/action'
import { postImage } from '../../../../store/postImage/selector'
import { PostImage } from '../PostImage/PostImage'
import styles from '../../Tabs/TabContent/TabsContent.styles.module.scss'

type Props = {
    usedPosts: Posts[]
}

export const ShowedPosts = ({usedPosts}: Props) => {
    const {isOpened, idOfPost} = useSelector(postImage) 
    const dispatch = useDispatch()
    const openImagePost = (id: number) => dispatch(OpenImageAction(id))
    const closeImagePost = () => dispatch(CloseImageAction())
    return (
        <>
            {
            <div className={styles.middle_posts}>
                {usedPosts
                    .filter((post, index) => index >= 0 && index <= 1)
                    .map((filteredPost) => (
                        <MediumPost key={filteredPost.id} post={filteredPost} openImage={() => openImagePost(usedPosts.indexOf(filteredPost))} />
                    ))}
            </div>
            }
            {
            <div className={styles.middle_posts}>
                {usedPosts
                    .filter((post, index) => index >= 2 && index <= 5)
                    .map((filteredPost) => (
                        <MediumPost key={filteredPost.id} post={filteredPost} openImage={() => openImagePost(usedPosts.indexOf(filteredPost))} />
                    ))}
            </div>
            }
            {
            <div className={styles.small_posts}>
                {
                    usedPosts
                        .filter((post, index) => index > 5)
                        .map((filteredPost) => (
                            <SmallPost key={filteredPost.id} post={filteredPost} openImage={() => openImagePost(usedPosts.indexOf(filteredPost))} />
                        ))
                }
            </div>
            }
            {
                isOpened ? (
                    <PostImage dataPosts={usedPosts} dataLength={usedPosts.length} idOfPost={idOfPost || idOfPost === 0 ? idOfPost : 1} closeImage={closeImagePost}/>
                ) : (
                    null
                )
            }
        </>
    )
}