import { LightIcon } from '../LightIcon/LightIcon'
import { DarcIcon } from '../DarcIcon/DarcIcon'
import { useState } from 'react'

type Props ={
    theme: string
    changeTheme: (theme:string) => void
}

export const ThemeButtons = ({theme, changeTheme}: Props) => {


    return (
        <div>
            theme: {theme}
            <button onClick={() => changeTheme('dark')} disabled={theme !== 'light'}>
                <LightIcon disabled={theme === 'light'}/>
            </button>
            <button onClick={() => changeTheme('light')} disabled={theme === 'light'}>
                <DarcIcon disabled={theme !== 'light'}/>
            </button>
        </div>
    )
}