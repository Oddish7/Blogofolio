import { useState } from 'react'
import style from './Input.styles.module.scss'

export const Input = () => {
const [text, setText] = useState('')

const functionInput = (e: React.FormEvent<HTMLInputElement>) => {
    setText(e.currentTarget.value)
}

    return (
        <div>
            <h2 className={style.title}>Title</h2>
            <input 
            className={style.input} 
            onInput={functionInput} 
            type="text" 
            placeholder={'Placeholder'} 
            value={text}
            />

            <h2 className={style.title}>Title</h2>
            <input className={style.input} onInput={functionInput} type="text" placeholder={'Placeholder'} value={text}/>
        </div>
    )
}