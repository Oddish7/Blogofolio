import { setCloseMoreAction } from '../../../store/more/action'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styles from './MoreInnerButtons.styles.module.scss'

type Props = {
    typeOfPost: string
    postId: string
}

export const MoreInnerButtons = ({ typeOfPost, postId }: Props) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const close = () => dispatch(setCloseMoreAction(postId))

    const edit = () => {
        navigate('editpost')
        close()
    }

    return (
        <div className={`${styles.more_inner_buttons} ${styles[typeOfPost]}`}>
            <div onClick={edit}>Edit</div>
            <div onClick={edit}>Delete</div>
        </div>
    )
}