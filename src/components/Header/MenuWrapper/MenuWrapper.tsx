import { BurgerProvider } from '../../../utils/BurgerContext'
import { Burger } from "./Burger/Burger";
import { Menu } from "./Menu/Menu";

export const MenuWrapper = () => {
    return (
        <>
        <BurgerProvider>
            <Burger/>
            <Menu/>
        </BurgerProvider>
        </>
    )
}