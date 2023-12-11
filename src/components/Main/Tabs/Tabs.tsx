import { TabsHolder } from './TabHolder/TabsHolder'
import styles from './Tabs.styles.module.scss'


export const Tabs = () => {
    const items = ["All", "My favorites", "Popular"]

    return (
        <div className={styles.tabs}>
            <TabsHolder items={items}/>
        </div>
    )
}