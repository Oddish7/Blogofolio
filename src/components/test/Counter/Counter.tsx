import { useState } from "react"

const Counter = () => {
    const [state, setState] = useState(0)

    const increase = () => {
        setState(state + 1)
    }

    return (
        <div>
            {state}
            <input type="button" value={'+1'} onClick={increase} />
        </div>
    )
}

export default Counter