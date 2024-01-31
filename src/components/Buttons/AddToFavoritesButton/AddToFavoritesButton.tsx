import { BookMarkButtonIcon } from '../../Buttons/BookMarkButton/BookMarkButtonIcon'
import { useSelector, useDispatch } from 'react-redux'
import { AppState } from '../../../store/store'
import { AddToFavsAction, UndoAddToFavs } from '../../../store/favs/action'
import styles from './AddToFavoritesButton.styles.module.scss'

type Props = {
    postId: string
}

export const AddToFavoritesButton = ({postId}: Props) => {
    const favState = useSelector((state: AppState) => state.favs[postId])
    const dispatch = useDispatch()

    const {isAdded} = favState || {}
    const addToFav = () => dispatch(AddToFavsAction(postId))
    const undo = () => dispatch(UndoAddToFavs(postId))

    return (
        <button onClick={isAdded ? undo : addToFav} className={`${styles.add_to_fav_button} ${isAdded ? styles.added_to_fav : ''}`}>
            <BookMarkButtonIcon/>
            <p>Add to favorites</p>
        </button>
    )
}
