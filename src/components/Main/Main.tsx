import { MainTitle } from "./MainTitle/MainTitle";
import { Tabs } from "./Tabs/Tabs";
import { BigPost } from "./Posts/BigPost/BigPost";
import styles from './Main.styles.module.scss'

export const Main = () => {
    return (
        <div className={styles.main}>
            <MainTitle/>
            <Tabs/>
            <BigPost/>
        </div>
    )
}