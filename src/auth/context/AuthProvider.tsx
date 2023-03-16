import { useReducer } from "react"
import { AuthContext, authReducer, initialState } from "."

interface childrenProps {
    children: JSX.Element | JSX.Element[]
}


const init = () : initialState => {

    const storedUser = localStorage.getItem('user');

    
    const user = storedUser && JSON.parse(storedUser)

    const isLogged = !!user
    
    return storedUser ? {
        logged: isLogged,
        user
    }: {
        logged: false,
    };
}


export const AuthProvider = ({ children }: childrenProps) => {

    const [{ logged, user }, dispatch] = useReducer(authReducer, {}, init)

    const onLogin = (name: string = '', email: string = ''): void => {

        localStorage.setItem('user', JSON.stringify({ name, email }))

        dispatch({ type: '[Auth] Login', payload: { name, email } })
    }

    const onLogout = (): void =>{

        localStorage.removeItem('user')
        dispatch( { type: '[Auth] Logout' })
    }

    return (
        <AuthContext.Provider
            value={{
                onLogin,
                logged,
                user,
                onLogout
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}
