import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectPosts } from '../../../../store/posts/selector'
import { AppDispatch } from '../../../../store/store'
import { LoadAllPostAsyncAction, setPageAction } from '../../../../store/posts/action'
import { getCustomPostPages } from '../../../../utils/getPageData'
import { getPages } from '../../../../utils/getPages'
import { AllNavigation } from '../../../Navigation/AllNavigation/AllNavigation'
import { ShowedPosts } from '../ShowedPosts/ShowedPosts'

export const PopularPosts = () => {
    const { amountPosts, page } = useSelector(selectPosts)
    const dispatch = useDispatch<AppDispatch>()
    const popularPosts = amountPosts.filter(post => +post.likes > 50)

    useEffect(() => {
        dispatch(LoadAllPostAsyncAction())
        dispatch(setPageAction())
    }, [dispatch])
    
    const showedPosts = getCustomPostPages(popularPosts, page!, 12)
    let pages: string[] = getPages(popularPosts.length, 12, 12, page!)

    const onPopularPage = (page: number) => {
        dispatch(setPageAction(page))
    }
    
    return (
        <>
        <ShowedPosts usedPosts={showedPosts}/>
        <AllNavigation onPage={onPopularPage} page={page?.toString()!} pages={pages}/>
        </>
    )
}