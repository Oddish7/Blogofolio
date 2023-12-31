import { MenuWrapper } from './MenuWrapper/MenuWrapper'
import { HeaderInput } from './HeaderInput/HeaderInput'
import { Search } from './Search/Search'
import { UserInfo } from './UserInfo/UserInfo'
import styles from './Headet.styles.module.scss'

export const Header = () => {
    return (
        <div className={styles.header}>
            <MenuWrapper/>
            <HeaderInput/>
            <Search/>
            <UserInfo/>
        </div>
    )
}