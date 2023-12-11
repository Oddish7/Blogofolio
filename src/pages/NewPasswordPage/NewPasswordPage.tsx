import { BackToHome } from '../../components/Buttons/BackToHome/BackToHome'
import { PageHeader } from '../../components/PageHeader/PageHeader'
import { SignForm } from '../../components/SignForm/SignForm'
import styles from '../SignInPage/sign_in_page.module.scss'

type InputType = {
    title: string
    text: string
    type: string
}

export const NewPasswordPage = () => {
    const inputs: InputType[] = [
        {
            title: 'Password',
            text: 'Your password',
            type: 'password'
        },
        {
            title: 'Confirm password',
            text: 'Confirm password',
            type: 'password'
        }
    ]

    return (
        <div className={styles.wrapper}>
            <div className={styles.page}>
                <BackToHome/>
                <PageHeader title="New password"/>
                <SignForm 
                    innerItems={inputs}
                    buttonName='Set password'
                />
            </div>
        </div>
    )
}
