import { createContext } from "react";

export interface AuthContextType {
    onLogin: (name?: string, email?: string) => void;
    logged: boolean;
    user?: { email: string, name: string }
    onLogout: () => void
}

export const AuthContext = createContext({} as AuthContextType)



