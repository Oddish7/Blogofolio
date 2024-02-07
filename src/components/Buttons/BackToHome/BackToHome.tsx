import styles from './BackToHome.styles.module.scss'
import { Link } from 'react-router-dom'

export const BackToHome = () => {
    return (
        <Link to='/' className={styles.back_to_home}>
            Back to home
        </Link>
    )
}
