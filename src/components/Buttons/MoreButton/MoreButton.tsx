import { useDispatch} from 'react-redux'
import { MoreButtonIcon } from './MoreButtonIcon'
import { setCloseMoreAction, setOpenMoreAction } from '../../../store/more/action'
import { useMoreState } from '../../../store/more/selector'
import styles from './MoreButton.styles.module.scss'

type Props = {
    postId: string
}

export const MoreButton = ({postId}: Props) => {
    const moreState = useMoreState(postId)
    const {more} = moreState || {}

    const dispatch = useDispatch()
    const open = () => dispatch(setOpenMoreAction(postId))
    const close = () => dispatch(setCloseMoreAction(postId))
    return (
        <>
            <button onClick={more ? close : open} className={styles.more}>
                <MoreButtonIcon/>
            </button>
        </>
    )
}