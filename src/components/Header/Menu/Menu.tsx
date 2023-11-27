type Props = {
    open: boolean
}

export const Menu = (props: Props) => {
    if (!props.open) {
        return null
    }
    return (
        <div>
            {/* <ul>
                {
                    data.map((item, index) => (
                        <li key={item}>{item}</li>
                    ))
                }
            </ul> */}
        </div>
    )
}
