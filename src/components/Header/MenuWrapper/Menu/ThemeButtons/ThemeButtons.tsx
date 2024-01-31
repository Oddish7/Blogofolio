import { NormalMode } from '../NormalMode/NormalMode'
import { DarkMode } from '../DarkMode/DarkMode'
import { useSelector, useDispatch } from 'react-redux';
import { selectTheme } from '../../../../../store/theme/selector'
import { setLightAction, setDarkAction } from '../../../../../store/theme/action'
import styles from './ThemeButtons.styles.module.scss'


export const ThemeButtons = () => {
    const state = useSelector(selectTheme)
    const dispatch = useDispatch()

    const setLight = () => dispatch(setLightAction())
    const setDark = () => dispatch(setDarkAction())
    return (
        <div>
            <button 
                onClick={setLight} 
                disabled={state.theme === 'light'}
                className={styles.mode_button}
            >
                <NormalMode disabled={state.theme !== 'light'}/>
            </button>
            <button 
                onClick={setDark}
                disabled={state.theme !== 'light'}
                className={styles.mode_button}
            >
                <DarkMode disabled={state.theme === 'light'}/>
            </button>
        </div>
    )
}