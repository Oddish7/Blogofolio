import { SignForm } from '../../components/SignForm/SignForm'
import { BackToHome } from '../../components/Buttons/BackToHome/BackToHome'
import { PageHeader } from '../../components/PageHeader/PageHeader'
import styles from './SignInPage.styles.module.scss'

type InputType = {
    title: string
    text: string
    type: string
}

export const SignInPage = () => {
    const inputs: InputType[] = [
        {
            title: 'Email',
            text: 'Your email',
            type: 'email'
        },
        {
            title: 'Password',
            text: 'Your password',
            type: 'password'
        }
    ]

    return (
        <div className={styles.wrapper}>
            <div className={styles.page}>
                <BackToHome/>
                <PageHeader title="Sign In"/>
                <SignForm 
                    innerItems={inputs}
                    underTitle="Don't have an account?"
                    underLink='Sign Up'
                    buttonName='Sign In'
                    forgetLink='Forgot password?'
                />
            </div>
        </div>
    )
}
