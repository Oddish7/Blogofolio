import styles from './Tabs.styles.module.scss'

export const Tabs = () => {
    return (
        <div className={styles.tabs}>
            <button className={styles.button}>All</button>
            <button className={styles.button}>My favorites</button>
            <button className={styles.button}>Popular</button>
        </div>
    )
}