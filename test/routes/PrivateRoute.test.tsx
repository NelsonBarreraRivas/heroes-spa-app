import React from "react";
import { PrivateRoute } from "../../src/routes/PrivateRoute";
import { PublicRoute } from "../../src/routes/PublicRoute";
import { render, screen } from "@testing-library/react";
import { AuthContext } from "../../src/auth/context/AuthContext";
import { AuthContextType } from "../../src/auth/context/AuthContext";
import { initialState } from "../../src/auth/context/authReducer";
import {
    createMemoryRouter,
    RouteObject,
    RouterProvider,
} from "react-router-dom";

describe('Pruebas en <PrivateRoute />', () => {


    Storage.prototype.setItem = jest.fn()
    
    beforeEach( () => jest.clearAllMocks() )


    test('debe de mostrar el children(Pages Privadas) si está autenticado', () => {

        /*const value = {
            logged: false
        } as initialState*/

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
                element: <h1>Login page</h1>
            },
            {
                path: '/',
                element: <PrivateRoute><h1>Characters Page</h1></PrivateRoute>
            }
        ]

        const router = createMemoryRouter(routesConfig, { initialEntries: ['/'] });

        render(
            <AuthContext.Provider value={value as AuthContextType}>
                <RouterProvider router={router} />
            </AuthContext.Provider>
        )

        expect( screen.getByText('Characters Page') ).toBeTruthy()

        expect( localStorage.setItem ).toHaveBeenCalledWith('lastPath', '/')


    });

    test('debe de mostrar el children(Login) si no está autenticado', () => {

        /*const value = {
            logged: false
        } as initialState*/

        const value = {
            logged: false
        } as initialState

        const routesConfig: RouteObject[] = [
            {
                path: 'login',
                element: <h1>Login page</h1>
            },
            {
                path: '/',
                element: <PrivateRoute><h1>Characters Page</h1></PrivateRoute>
            }
        ]

        const router = createMemoryRouter(routesConfig, { initialEntries: ['/'] });

        render(
            <AuthContext.Provider value={value as AuthContextType}>
                <RouterProvider router={router} />
            </AuthContext.Provider>
        )

        expect( screen.getByText('Login page') ).toBeTruthy()
        expect( localStorage.setItem ).toHaveBeenCalledWith('lastPath', '/')



    });


});