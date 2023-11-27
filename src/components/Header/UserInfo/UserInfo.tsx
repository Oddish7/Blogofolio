import styles from './UserInfo.styles.module.scss'

export const UserInfo = () => {
    return (
        <button className={styles.button}>
            <p className={styles.name}>
                AM
            </p>
            <p>
                Artem Malkin
            </p>
        </button>

    )
}