import { useState } from 'react'
import styles from './Tabs.styles.module.scss'

type Props = {
    text: string
    active?: boolean
    onTabClick: () => void
}

const Tab = ({ text, active, onTabClick }: Props) => {
    const isActiveStyle = active ? styles.active : ''

    return(
        <div className={styles.tab + ' ' + isActiveStyle} onClick={onTabClick}>
            {text}
        </div>
    )
}

export const Tabs = () => {
    const[activeTab, setActiveTab] = useState(0)
    const tabs = ["All", "Favorite", "Popular"]

    const changeTabHandler = (index: number) => {
        setActiveTab(index)
    }

    return (
        <div className={styles.tabWrapper}>
            {
                tabs.map((currentTabName, index) => (
                    <Tab 
                    key={currentTabName} 
                    text={currentTabName} 
                    active={index === activeTab}
                    onTabClick={() => changeTabHandler(index)}
                    />
                ))
            }
        </div>
    )
}