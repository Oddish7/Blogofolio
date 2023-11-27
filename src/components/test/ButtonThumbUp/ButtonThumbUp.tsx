import styles from './ButtonThumbUp.styles.module.scss'
import ButtonThumbUpIcon from './ButtonThunbUpIcon'

const ButtonThumbUp = () => {
    return (
        <button className={styles.button}>
            <ButtonThumbUpIcon />
        </button>
    )
}

export default ButtonThumbUp