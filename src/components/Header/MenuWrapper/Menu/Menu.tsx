import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { ThemeButtons } from './ThemeButtons/ThemeButtons'

import { MenuButton } from '../../../Buttons/MenuButton/MenuButton'
import { RequireAuth } from '../../../../utils/RequireAuth'


import { User } from '../../User/User'

import { setMenu } from '../../../../store/burgerMenu/selector'
import { setCloseAction } from '../../../../store/burgerMenu/action'
import { useAuthState } from '../../../../store/auth/selector'
import { logoutAction } from '../../../../store/auth/action'
import styles from './Menu.styles.module.scss'


export const Menu = () => {
    const {isOpened} = useSelector(setMenu)
    const signInData = useAuthState()

    const dispatch = useDispatch()
    const setCloseMenu = () => dispatch(setCloseAction())

    const logout = () => dispatch(logoutAction())

    if(!isOpened){
        return null
    }
    return (
        <div className={`${styles.menu}`}>
            <div className={styles.user_style}>
                <ul>
                {
                    <>
                        <RequireAuth>
                            <User name={signInData.userName} abbr={signInData.initials}/> 
                        </RequireAuth>
                        <NavLink to='/' onClick={() => setTimeout(setCloseMenu, 100)}>
                            <li>Home</li>
                        </NavLink>
                        <RequireAuth>
                            <NavLink to='addpost' onClick={() => setTimeout(setCloseMenu, 100)}>
                                <li>Add post</li>
                            </NavLink>
                        </RequireAuth>
                    </>
                }
                </ul>
            </div>
            <div>
                <ThemeButtons/>
                {
                    signInData.isLoged ? (
                        <RequireAuth>
                            <MenuButton toLog={logout} forMenuClosed={() => setTimeout(setCloseMenu, 100)} title='Log out'/>
                        </RequireAuth>
                    ) : (
                        <MenuButton linkTo='auth/signin' forMenuClosed={() => setTimeout(setCloseMenu, 100)} title='Sign In'/>
                    )
                }
            </div>
        </div>
    )
}
