import React from "react";
import { PublicRoute } from "../../src/routes/PublicRoute";
import { render, screen } from "@testing-library/react";
import { AuthContext } from "../../src/auth/context/AuthContext";
import { AuthContextType } from "../../src/auth/context/AuthContext";
import { initialState } from "../../src/auth/context/authReducer";
import {
    createMemoryRouter,
    RouteObject,
    RouterProvider,
    createBrowserRouter
} from "react-router-dom";

describe('Pruebas en <PublicRoute />', () => {



    test('debe de mostrar el children(Login) si no está autenticado', () => {

        const auth = {
            logged: false
        } as initialState

        const routesConfig: RouteObject[] = [
            {
                path: 'login',
                element: <PublicRoute><h1>Ruta Publica</h1></PublicRoute>
            }
        ]

        const router = createMemoryRouter(routesConfig, { initialEntries: ['/login'], });

        render(
            <AuthContext.Provider value={auth as AuthContextType}>
                <RouterProvider router={router} />
            </AuthContext.Provider>
        )

        expect(screen.getByText('Ruta Publica')).toBeTruthy()

    });

    test('debe de navegar si esta autenticado', () => {

        const value = {
            logged: true,
            user: {
                name: 'Nelson',
                email: 'nelsonbr'
            }
        } as initialState

        const routesConfig: RouteObject[] = [
            {
                path: 'login',
                element: <PublicRoute><h1>Ruta Publica</h1></PublicRoute>
            }, {
                path: '/',
                element: <h1>Ruta Privada</h1>
            }
        ]

        const router = createMemoryRouter(routesConfig, { initialEntries: ['/login'], });

        render(
            <AuthContext.Provider value={value as AuthContextType}>
                <RouterProvider router={router} />
            </AuthContext.Provider>
        )

        expect(screen.getByText('Ruta Privada')).toBeTruthy()
    });

});