import { useBurgerContext } from '../../../../utils/BurgerContext'
import { BurgerIcon } from "./BurgerIcon";
import { CloseBurgerIcon } from "./OpenBurgerIcon"
import styles from './Burger.styles.module.scss'


export const Burger = () => {
    const { state, dispatch } = useBurgerContext()

    const open = () => dispatch({ type: 'open' })
    const close = () => dispatch({ type: 'close' })

    return (
        <div onClick={state.isOpened ? close : open}>
            {state.isOpened ? (
                <button className={styles.open_icon}>
                    <CloseBurgerIcon />
                </button>
            ) : (
                <button className={styles.burger}>
                    <BurgerIcon />
                </button>
            )}
        </div>
    )
}
