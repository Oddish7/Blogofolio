import { useSelector, useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import { selectPosts } from "../../../../store/posts/selector"
import { AppDispatch } from "../../../../store/store"

import { CloseImageAction, OpenImageAction} from "../../../../store/postImage/action"
import { LoadPostAsyncAction } from "../../../../store/posts/action"
import { BigPost } from "../BigPost/BigPost"
import { MediumPost } from "../MediumPost/MediumPost"
import { SmallPost } from "../SmallPost/SmallPost"

import { Posts } from "../../Tabs/TabContent/TabContent"
import { AllNavigation } from "../../../Navigation/AllNavigation/AllNavigation"
import { getPages } from "../../../../utils/getPages"
import { changeImageValue } from "../../../../utils/getPageData"
import { PostImage } from "../PostImage/PostImage"
import { postImage } from "../../../../store/postImage/selector"
import styles from '../../Tabs/TabContent/TabsContent.styles.module.scss'


export const AllPosts = () => {
    const {amountPosts, page} = useSelector(selectPosts)
    const {isOpened, idOfPost} = useSelector(postImage) 
    
    const dispatch = useDispatch<AppDispatch>()
    const openImagePost = (id: number) => dispatch(OpenImageAction(id))
    const closeImagePost = () => dispatch(CloseImageAction())

    const [data, setData] = useState<Posts[]>()

    useEffect(() => {
        dispatch(LoadPostAsyncAction(page!))
        fetch(`https://65670f6864fcff8d730fa806.mockapi.io/posts`)
            .then(res => res.json())
            .then(res => setData(res))
    }, [dispatch])

    if (amountPosts.length === 0) {
        return null
    }

    const allPosts = changeImageValue(amountPosts)
    const onPageClick = (page: number) => {
        dispatch(LoadPostAsyncAction(page))
        window.scrollTo(0, 0)
    }

    let pages: string[] = getPages(data?.length!, 11, 12, page!)

    return (
        <>
            {
                page === 1 ? (
                    <div className={styles.big_post}>
                        <BigPost post={allPosts[0]} openImage={() => openImagePost(0)} />
                    </div>
                ) : (
                    <div className={styles.middle_posts}>
                        {
                        amountPosts
                        // allPosts
                            .filter((post, index) => index >= 0 && index <= 1)
                            .map((filteredPost, index) => (
                                <MediumPost key={filteredPost.id} post={filteredPost} openImage={() => openImagePost(amountPosts.indexOf(filteredPost))} />
                            ))}
                    </div>
                )
            }
            {
                page === 1 ? (
                    <div className={styles.middle_posts}>
                        {
                        amountPosts
                        // allPosts
                            .filter((post, index) => index >= 1 && index <= 4)
                            .map((filteredPost, index) => (
                                <MediumPost key={filteredPost.id} post={filteredPost} openImage={() => openImagePost(amountPosts.indexOf(filteredPost))} />
                            ))}
                    </div>
                ) : (
                    <div className={styles.middle_posts}>
                        {
                        amountPosts
                        // allPosts
                            .filter((post, index) => index >= 2 && index <= 5)
                            .map((filteredPost, index) => (
                                <MediumPost key={filteredPost.id} post={filteredPost} openImage={() => openImagePost(amountPosts.indexOf(filteredPost))} />
                            ))}
                    </div>
                )
            }
            {
                page === 1 ? (
                    <div className={styles.small_posts}>
                        {
                            amountPosts
                            // allPosts
                                .filter((post, index) => index >= 5)
                                .map((filteredPost, index) => (
                                    <SmallPost key={filteredPost.id} post={filteredPost} openImage={() => openImagePost(amountPosts.indexOf(filteredPost))} />
                                ))
                        }
                    </div>
                ) : (
                    <div className={styles.small_posts}>
                        {
                            amountPosts
                            // allPosts
                                .filter((post, index) => index > 5)
                                .map((filteredPost, index) => (
                                    <SmallPost key={filteredPost.id} post={filteredPost} openImage={() => openImagePost(amountPosts.indexOf(filteredPost))} />
                                ))
                        }
                    </div>
                )
            }
            <AllNavigation onPage={onPageClick} page={page!.toString()} pages={pages}/>
            {
                isOpened ? (
                    <PostImage dataPosts={amountPosts} dataLength={amountPosts.length} idOfPost={idOfPost || idOfPost === 0 ? idOfPost : 1} closeImage={closeImagePost}/>
                ) : (
                    null
                )
            }
        </>
    )
}