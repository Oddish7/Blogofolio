import { BackToHome } from '../../components/Buttons/BackToHome/BackToHome'
import { PageHeader } from '../../components/PageHeader/PageHeader'
import { SignForm } from '../../components/SignForm/SignForm'
import styles from '../SignInPage/SignInPage.styles.module.scss'

type InputType = {
    title: string
    text: string
    type: string
}

export const SignUpPage = () => {
    const inputs: InputType[] = [
        {
            title: 'Name',
            text: 'Your name',
            type: 'text'
        },
        {
            title: 'Email',
            text: 'Your email',
            type: 'email'
        },
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
                <PageHeader title="Sign Up"/>
                <SignForm 
                    innerItems={inputs}
                    underTitle='Already have an account?'
                    underLink='Sign In'
                    buttonName='Sign Up'
                />
            </div>
        </div>
    )
}
