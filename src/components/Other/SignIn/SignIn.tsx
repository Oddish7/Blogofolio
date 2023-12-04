import { SignInButton } from './SignInButton/SignInButton'
import styles from './SignIn.styles.module.scss'

export const SingIn = () => {
        return (
            <div className={styles.signIn}>
                <h2 className={styles.title}>Email</h2>
                <input 
                className={styles.input} 
                type="text" 
                placeholder={'Your email'} 
                />
    
                <h2 className={styles.title}>Password</h2>
                <input 
                className={styles.input} 
                type="text" 
                placeholder={'Your password'} 
                />
                <h3 className={styles.forgot}>Forgot password?</h3>
                <SignInButton/>
                <h3 className={styles.account}>Don’t have an account? <span>Sign Up</span></h3>
            </div>
        )
}