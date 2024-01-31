import styles from './SignLogButton.styles.module.scss'

type Props = {
    title: string
}

export const SignLogButton = (props: Props) => {
    const {title} = props
    return (
        <button className={styles.sign_log_button}>
            {title}
        </button>
    )
}