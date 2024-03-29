import { BackToHome } from '../../components/Buttons/BackToHome/BackToHome'
import { PageHeader } from '../../components/PageHeader/PageHeader'
import { ConfirmationForm } from '../../components/ConfirmationForm/ConfirmationForm'
import { useEffect } from 'react'
import { useAuthState } from '../../store/auth/selector'
import { useNavigate } from 'react-router-dom'
import { setSignInEmailAction, setSignInPasswordAction, signInAction } from '../../store/auth/action'
import { useSignUpState } from '../../store/signUp/selector'
import { useDispatch } from 'react-redux'
import { setCheckPasswordAction, setEmailAction, setPasswordAction, setUsernameAction } from '../../store/signUp/action'
import { AppDispatch } from '../../store/store'
import styles from '../SignInPage.styles.module.scss'

export const SuccessPage = () => {
    const message: string[] = ['Email confiremed.', 'Your registration is now completed']
    const auth = useAuthState()
    const signUp = useSignUpState()
    const navigate = useNavigate()
    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        window.scrollTo(0, 0)
        console.log(auth)
    }, [])


    const subLink = async () => {
        dispatch(signInAction(auth.email!, auth.password!))
        dispatch({
            type: 'SIGN_UP_FAILED',
            payload: {}
        })
        dispatch(setEmailAction(''))
        dispatch(setPasswordAction(''))
        dispatch(setUsernameAction(''))
        dispatch(setCheckPasswordAction(''))

        dispatch(setSignInPasswordAction(''))
        dispatch(setSignInEmailAction(''))
        navigate('/')
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.page}>
                <BackToHome/>
                <PageHeader title="Success"/>
                <ConfirmationForm onClick={subLink} msg={message}/>
            </div>
        </div>
    )
}