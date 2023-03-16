import { FC, useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../auth/context/AuthContext";

interface publicRouteProps {
    children: JSX.Element | JSX.Element[]
}
export const PublicRoute: FC<publicRouteProps> = ({ children }) => {
    const { logged } = useContext(AuthContext);

    return !logged ? <>{ children }</> : <Navigate to={"/"} />;
};