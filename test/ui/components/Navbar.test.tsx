import React from 'react';
import { Navbar } from '../../../src/ui/components/Navbar'
import { fireEvent, render, screen } from '@testing-library/react';
import { AuthContext, AuthContextType } from '../../../src/auth/context/AuthContext';
import { MemoryRouter } from 'react-router-dom';

const mockedUseNavigate = jest.fn()

jest.mock('react-router-dom', () => ( {
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate
} ))

describe('Prueba en el componente <Navbar />', () => {

    const value = {
        logged: true,
        user: {
            name: 'Nelson',
            email: 'nelsonbr'
        },
        onLogout: jest.fn(),
        onLogin: jest.fn()
    } as AuthContextType

    beforeEach(() => jest.clearAllMocks())

    test('debe de mostrarse el nombre del usuario', () => {

        render(
            <AuthContext.Provider value={value as AuthContextType}>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        )

        const buttonElement = screen.getByRole('button')

        fireEvent.click( buttonElement )


        expect( screen.getByText('Nelson') ).toBeTruthy()

    });


    test('debe de llamar al onLogout y al Navigate cuando se haga click en logout', () => {
        
        render(
            <AuthContext.Provider value={value as AuthContextType}>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        )

        const buttonElement = screen.getByRole('button')

        fireEvent.click( buttonElement )


        expect( value.onLogout ).toHaveBeenCalled()

        expect( mockedUseNavigate ).toHaveBeenCalledWith('/login', {replace: true})

    });

});