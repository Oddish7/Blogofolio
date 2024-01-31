import { PrevButton } from './PrevButton/PrevButton'
import { NextButton } from './NextButton/NextButton'
import { useSelector } from 'react-redux'
import { postImage } from '../../../store/postImage/selector'
import styles from './PrevAndNextButtons.styles.module.scss'

type Props = {
    dataLength: number
}

export const PrevAndNextButtons = ({dataLength}: Props) => {
    const {idOfPost} = useSelector(postImage)
    return (
        <div className={styles.buttons_wrapper}>
            <PrevButton disabled={idOfPost == 1 ? true : false}/>
            <NextButton disabled={idOfPost == dataLength ? true : false}/>
        </div>
    )
}