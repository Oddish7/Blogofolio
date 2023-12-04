import styles from './SignUp.styles.module.scss'
import { Input } from './Input/Input'
import { SignUpButton } from './SignUpButton/SignUpButton'

type InputType = {
    title: string
    text: string
}

export const SignUp = () => {
    const inputs: InputType[] = [
        {
            title: 'Name',
            text: 'Your name'
        },
        {
            title: 'Email',
            text: 'Your email'
        },
        {
            title: 'Password',
            text: 'Your password'
        },
        {
            title: 'Confirm',
            text: 'Confirm password'
        }
    ]
    const titles = ['Name', 'Email', 'Password', 'Confirm']
    const placeholders = ['Your name', 'Your email', 'Your password', 'Confirm password']
    return (
        <div className={styles.signUp}>
            {
                inputs.map((item, i) => (
                    <Input key={i} label={item.title} placeholder={item.text}/>
                ))
            }
            <SignUpButton/>
        </div>
    )
}