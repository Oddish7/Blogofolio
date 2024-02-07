import { useEffect} from "react"
import { useSelector, useDispatch } from "react-redux"
import { CloseImageAction } from "../../../../store/postImage/action"
import { selectPosts } from "../../../../store/posts/selector"
import { LoadPostAsyncAction } from "../../../../store/posts/action"
import { AppDispatch } from "../../../../store/store"
import { AllPosts } from "../../Posts/AllPosts/AllPosts"
import { FavoritePosts } from "../../Posts/FavoritePosts/FavoritePosts"
import { PopularPosts } from "../../Posts/PopularPosts/PopularPosts"
import styles from "./TabsContent.styles.module.scss"

export type Posts = {
    id: number
    date: Date
    title: string
    description: string
    image: string
    likes: string
    dislikes: string
}

type Props = {
    data_type: number
}

export const TabContent = (props: Props) => {
    const {data_type} = props
    const {amountPosts, page} = useSelector(selectPosts)
    // const {isOpened, idOfPost} = useSelector(postImage)   
    const dispatch = useDispatch<AppDispatch>()

    const closeImagePost = () => dispatch(CloseImageAction())

    useEffect(() => {
        dispatch(LoadPostAsyncAction(page!))

    }, [dispatch])


    if (amountPosts.length === 0) {
        return null
    }
    return (
        <>
            <div className={styles.tab_content}>
            {
                data_type === 0 ? (
                    <AllPosts/>
                ) : (
                    data_type === 1 ? (
                        <FavoritePosts/>
                    ) : (
                        <PopularPosts/>
                    )
                )
            }
            </div>
            {/* {
                isOpened ? (
                    <PostImage dataLength={amountPosts.length} idOfPost={idOfPost ? idOfPost : 1} closeImage={closeImagePost}/>
                ) : (
                    null
                )
            } */}
        </>
    )
}