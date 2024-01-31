import { MenuWrapper } from './MenuWrapper/MenuWrapper'
import { Search } from './Search/Search'
import { HeaderInput } from './HeaderInput/HeaderInput'
import { NonAutorized } from './User/NonAutorized/NonAutorized'
import { User } from './User/User'
import { useAuthState } from '../../store/auth/selector'
import styles from './Header.styles.module.scss'

export const Header = () => {
    const signInData = useAuthState()

    return (
        <div className={styles.header}>
            <MenuWrapper/>
            <HeaderInput/>
            <Search/>
            {
                signInData.isLoged ? (
                    <User name={signInData.userName} abbr={signInData.initials}/>
                ) : (
                    <NonAutorized/>
                )
            }
        </div>
    )
}