import { useSelector } from 'react-redux'
import { BookMarkButtonIcon } from './BookMarkButtonIcon'
import { AppState } from '..//../../store/store'
import { useDispatch } from 'react-redux'
import { AddToFavsAction, UndoAddToFavs } from '../../../store/favs/action'
import styles from './BookMarkButton.styles.module.scss'

type Props = {
    disabled?: boolean
    postId: string
}

export const BookMarkButton = ({disabled = false, postId}: Props) => {
    const favState = useSelector((state: AppState) => state.favs[postId])
    const dispatch = useDispatch()

    const {isAdded} = favState || {}
    const addToFav = () => dispatch(AddToFavsAction(postId))
    const undo = () => dispatch(UndoAddToFavs(postId))

    return (
        <button onClick={isAdded ? undo : addToFav} className={`${styles.bookmark} ${isAdded ? styles.add_to_favs : ''}`} disabled={disabled}>
            <BookMarkButtonIcon/>
        </button>
    )
}