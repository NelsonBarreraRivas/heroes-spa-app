import { Navigate, RouteObject } from "react-router-dom";
import { LoginPage } from "../auth/pages/LoginPage";
import { CharacterPage } from "../characters/pages/CharacterPage";
import { HeroPage } from "../characters/pages/HeroPage";
import { SearchCharacter } from "../characters/pages/SearchCharacter";
import ErrorPage from "../error-page";
import { HeroesApp } from "../HeroesApp";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

const childrenCharacterRouter : RouteObject[] = [
    {
        path: "characters",
        element: <CharacterPage />,
    },
    {
        path: "search-character",
        element: <SearchCharacter />,
    },
    {
        path: 'character/:id',
        element: <HeroPage />,
        
    },
    {
        path: '/',
        element: <Navigate to={'characters'} replace/>,
        
    },
]

export const routesConfig : RouteObject[] = [
    {
        path: "/",
        element: <PrivateRoute><HeroesApp /></PrivateRoute>,
        errorElement: <ErrorPage />,
        children: childrenCharacterRouter
    },
    {
        path: "/login",
        element: <PublicRoute><LoginPage /></PublicRoute>,
        errorElement: <ErrorPage />
    },
]