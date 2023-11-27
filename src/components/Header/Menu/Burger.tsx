import styles from './Burger.styles.module.scss'
import { BurgerIcon } from "./BurgerIcon";
import { CloseBurgerIcon } from "./CloseBurgerIcon"

type Props = {
    open: boolean
    onClick: () => void
}

export const Burger = (props: Props) => {

    return (
        <div onClick={props.onClick}>
        {
            props.open ? (
                <button className={styles.burgerButton}>
                    <CloseBurgerIcon/>
                </button>
            ) : (
                <button className={styles.burgerButton}>
                    <BurgerIcon/>
                </button>
            )
        }
        </div>
    )
}
