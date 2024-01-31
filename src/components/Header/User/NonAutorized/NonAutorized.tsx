import { NonAutorizedIcon } from './NonAutorizedIcon'
import { Link } from 'react-router-dom'
import styles from './NonAutorized.styles.module.scss'

export const NonAutorized = () => {
    return (
        <Link to='auth'>
            <div className={styles.non_author}>
                <NonAutorizedIcon/>
            </div>
        </Link>
    )
}