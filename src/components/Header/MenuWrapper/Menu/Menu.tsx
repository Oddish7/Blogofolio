import { useBurgerContext } from '../../../../utils//BurgerContext'
import { ThemeButtons } from './ThemeButtons/ThemeButtons'
import styles from './Menu.styles.module.scss'


const data = ["Home"]

export const Menu = () => {
    const {state} = useBurgerContext()
    if(!state.isOpened){
        return null
    }
    return (
        <div className={`${styles.menu}`}>
            <div className={styles.user_style}>
                {/* <User name='Artem Malkin' abbr='AM'/> */}
                <ul>
                {
                    data.map(item => (
                        <li key={item}>{item}</li>
                    ))
                }
                </ul>
            </div>
            <div>
                <ThemeButtons/>
            </div>
        </div>
    )
}
