import { BurgerIcon } from './BurgerIcon'
import { OpenMenuIcon } from './OpenMenuIcon'
import { useSelector, useDispatch } from 'react-redux'
import { setMenu } from '../../../../store/burgerMenu/selector'
import { setCloseAction, setOpenAction } from '../../../../store/burgerMenu/action'
import styles from './Burger.styles.module.scss'


export const Burger = () => {
    const state = useSelector(setMenu)
    const dispatch = useDispatch()

    const setOpenMenu = () => dispatch(setOpenAction())
    const setCloseMenu = () => dispatch(setCloseAction())

    return (
        <div onClick={state.isOpened ? setCloseMenu : setOpenMenu}>
            {state.isOpened ? (
                <button className={styles.open_icon}>
                    <OpenMenuIcon />
                </button>
            ) : (
                <button className={styles.burger}>
                    <BurgerIcon />
                </button>
            )}
        </div>
    )
}
