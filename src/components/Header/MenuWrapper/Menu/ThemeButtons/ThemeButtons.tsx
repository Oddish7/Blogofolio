import { NormalMode } from '../NormalMode/NormalMode'
import { DarkMode } from '../DarkMode/DarkMode'
import { useThemeContext } from '../../../../../utils/ThemeContext'
import styles from './ThemeButtons.styles.module.scss'


export const ThemeButtons = () => {

    const themeState = useThemeContext()
    return (
        <div>
            <button 
                onClick={() => themeState.setState('light')} 
                disabled={themeState.state === 'light'}
                className={styles.mode_button}
            >
                <NormalMode disabled={themeState.state !== 'light'}/>
            </button>
            <button 
                onClick={() => themeState.setState('dark')} 
                disabled={themeState.state !== 'light'}
                className={styles.mode_button}
            >
                <DarkMode disabled={themeState.state === 'light'}/>
            </button>
        </div>
    )
}