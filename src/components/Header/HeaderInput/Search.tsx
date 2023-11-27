import { useState } from 'react'
import { DeleteIcon } from './DeleteIcon'
import styles from './HeaderInput.styles.module.scss'

export const HeaderInput = () => {
    const [searchText, setSearchText] = useState('')

    const inputChange = (e: React.FormEvent<HTMLInputElement>) => {
        setSearchText(e.currentTarget.value)
    }

    const clearInput = () => {
        setSearchText('')
    }

    return (
        <div className={styles.headerInput}>
            <input placeholder='Search...' type="text" value={searchText} onChange={inputChange}/>
            <button onClick={clearInput}>
                {<DeleteIcon/>}
            </button>
        </div>
    )
}