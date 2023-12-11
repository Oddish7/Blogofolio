import styles from './PageHeader.styles.module.scss'

type Props = {
    title: string
}

export const PageHeader = ({title}: Props) => {
    return (
        <h1 className={styles.page_header}>
            {title}
        </h1>
    )
}
