import { useDispatch} from 'react-redux'
import { MoreButtonIcon } from './MoreButtonIcon'
import { setCloseMoreAction, setOpenMoreAction } from '../../../store/more/action'
import { useMoreState } from '../../../store/more/selector'
import styles from './MoreButton.styles.module.scss'
import { useAuthState } from '../../../store/auth/selector'
import { setEditAction } from '../../../store/edit/action'

type Props = {
    postId: string
    title?: string
    description?: string
}

export const MoreButton = ({postId, title, description}: Props) => {
    const {isLoged} = useAuthState()
    const moreState = useMoreState(postId)
    const {more} = moreState || {}

    const dispatch = useDispatch()
    const open = () => {
        dispatch(setOpenMoreAction(postId))
        dispatch(setEditAction(postId?.toString(), title!, description!))
    } 
    const close = () => dispatch(setCloseMoreAction(postId))

    return (
        <>
            <button disabled={isLoged ? false : true} onClick={more ? close : open} className={styles.more}>
                <MoreButtonIcon/>
            </button>
        </>
    )
}