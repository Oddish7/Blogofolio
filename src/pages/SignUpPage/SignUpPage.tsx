import { BackToHome } from '../../components/Buttons/BackToHome/BackToHome'
import { PageHeader } from '../../components/PageHeader/PageHeader'
import { useEffect } from 'react'
import { SignUpForm } from '../../components/SignForm/SignUpForm'
import styles from '../SignInPage.styles.module.scss'

type InputType = {
    title: string
    text: string
    type: string
}

export const SignUpPage = () => {
    useEffect(() => window.scrollTo(0, 0), [])

    return (
        <div className={styles.wrapper}>
            <div className={styles.page}>
                <BackToHome/>
                <PageHeader title="Sign Up"/>
                <SignUpForm 
                    underTitle='Already have an account?'
                    underLink='Sign In'
                    linkTo='signin'
                    submitLink='signup/success'
                    buttonName='Sign Up'/>
            </div>
        </div>
    )
}
