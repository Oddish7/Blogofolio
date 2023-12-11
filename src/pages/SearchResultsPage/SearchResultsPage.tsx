import { PageHeader } from '../../components/PageHeader/PageHeader'
import styles from '../SignInPage/SignInPage.styles.module.scss'

export const SearchResultsPage = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.page}>
                <PageHeader title="Search results"/>
            </div>
        </div>
    )
}
