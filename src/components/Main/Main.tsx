import { Tabs } from "./Tabs/Tabs";
import styles from './Main.styles.module.scss'

export const Main = () => {
    return (
        <div className={styles.main}>
            <h1>Blog</h1>
            <Tabs/>
        </div>
    )
}