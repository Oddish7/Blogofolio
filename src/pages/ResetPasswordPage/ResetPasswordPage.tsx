import { useEffect } from 'react'
import { BackToHome } from '../../components/Buttons/BackToHome/BackToHome'
import { PageHeader } from '../../components/PageHeader/PageHeader'
import { SignForm } from '../../components/SignForm/SignForm'
import styles from '../SignInPage.styles.module.scss'

type InputType = {
    title: string
    text: string
    type: string
}

export const ResetPasswordPage = () => {
    const inputs: InputType[] = [
        {
            title: 'Email',
            text: 'Your email',
            type: 'email'
        }
    ]

    useEffect(() => window.scrollTo(0, 0))

    return (
        <div className={styles.wrapper}>
            <div className={styles.page}>
                <BackToHome/>
                <PageHeader title="Reset password"/>
                <SignForm 
                    innerItems={inputs}
                    buttonName='Reset'
                    submitLink='/'
                />
            </div>
        </div>
    )
}
