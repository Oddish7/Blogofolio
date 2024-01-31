import { ReactNode } from 'react'
import { useAuthState } from '../store/auth/selector'

type Props = {
    children: ReactNode
}

export const RequireAuth = ({children}: Props) => {
    const signInData = useAuthState()

    if(!signInData.isLoged){
        return (
            null
        )
    }
    return (
        <>
            {children}
        </>
    )
}