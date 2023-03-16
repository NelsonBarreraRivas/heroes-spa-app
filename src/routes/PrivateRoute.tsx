import { FC, useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../auth/context/AuthContext";

interface privateRouteProps{
    children: JSX.Element | JSX.Element[]
}

export const PrivateRoute : FC<privateRouteProps> = ({ children }) => {
    const { logged } = useContext(AuthContext);
    const { pathname, search} = useLocation()

    const lastPath = pathname + search

    localStorage.setItem('lastPath' ,lastPath);
    
    return logged ? <>{children}</> : <Navigate to={"/login"} />;
};
