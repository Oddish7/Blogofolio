import { MenuWrapper } from './MenuWrapper/MenuWrapper'
import { Search } from './Search/Search'
import { HeaderInput } from './HeaderInput/HeaderInput'
import { NonAutorized } from './User/NonAutorized/NonAutorized'
import { User } from './User/User'
import { useAuthState } from '../../store/auth/selector'
import { useState } from 'react'
import styles from './Header.styles.module.scss'
import { ProfileInfo } from '../ProfileInfo/ProfileInfo'

export const Header = () => {
    const signInData = useAuthState()
    const [profileState, setProfileState] = useState<boolean>(false)

    const open = () => setProfileState(true)
    const close = () => setProfileState(false)

    return (
        <div className={styles.header}>
            <MenuWrapper/>
            <HeaderInput/>
            <Search/>
            {
                signInData.isLoged ? (
                    <User onClick={open} name={signInData.userName} abbr={signInData.initials}/>
                ) : (
                    <NonAutorized/>
                )
            }
            {
                profileState ? (
                    <ProfileInfo onClick={close}/>
                ) : ( null )
            }
        </div>
    )
}