import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import React, { ChangeEvent } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { SearchCharacter } from '../../../src/characters/pages/SearchCharacter'

const mockedUseNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate : () => mockedUseNavigate
}))

describe('Pruebas en <SearchCharacter />', () => {

    const character = 'hulk'

    test('debe de mostrarse correctamente con los valores por defecto', () => {

        const { container } = render(
            <MemoryRouter>
                <SearchCharacter />
            </MemoryRouter>
        )

        expect( container ).toMatchSnapshot()
    });

    test('debe de mostrar a Hulk y el input con el valor del queryString', async () => {

        render(
            <MemoryRouter initialEntries={[`/search-character?q=${ character }`]}>
                <SearchCharacter />
            </MemoryRouter>
        )

        await waitFor(() => screen.getByTestId('list-data'))

        const inputElement = screen.getByRole('searchbox') as HTMLInputElement

        const alertsRole = screen.getAllByLabelText('alert') 

        alertsRole.forEach( alert => expect(alert.style.display).toBe('none') )

        expect( inputElement.value ).toBe( character )
    
        expect( screen.getByTestId('list-data') ).toBeTruthy()

    });

    test('debe de mostrar un error si no se encuentra el charcter (batman) ', async () => {
        
        const characterNone = 'batman'

        render(
            <MemoryRouter initialEntries={[`/search-character?q=${ characterNone }`]}>
                <SearchCharacter />
            </MemoryRouter>
        )

        await waitFor(() => screen.getByTestId('list-data'))

        const list = screen.getByTestId('list-data')

        expect(list.querySelector('li')).toBeFalsy();

        const alertsRole = screen.getAllByLabelText('alert') 

        
        const [ alert ] = alertsRole.filter( alert => alert.style.display !== 'none')

        expect( alert.textContent ).toContain(`no result with ${ characterNone }`)

    });

    test('debe de llamar al navigate a la pantalla nueva cuando se dispare el submit', async () => {
        
        render(
            <MemoryRouter initialEntries={[`/search-character`]}>
                <SearchCharacter />
            </MemoryRouter>
        )

        const inputElement = screen.getByRole('searchbox') as HTMLInputElement

        fireEvent.change( inputElement, { target: { value: character } } as ChangeEvent<HTMLInputElement> )

        const formElement = screen.getByRole('form')

        fireEvent.submit( formElement )

        expect( mockedUseNavigate ).toBeCalledWith(`?q=${character}`)

    });

});