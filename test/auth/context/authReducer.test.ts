import { authReducer, initialState } from "../../../src/auth/context/authReducer";
import { types } from "../../../src/auth/types/types";

describe('Pruebas en authReducer', () => {


    const initialState: initialState = {
        logged: false
    }

    test('debe de retornar el estado inicial por defecto', () => {
        
        const action: types = { type : 'default' }

        const auth = authReducer( initialState, action )
        
        expect( auth ).toEqual( initialState )

    });

    test('debe de (login) llamar el login autenticar y establecer el user', () => {

        const action: types = { type : '[Auth] Login', payload: { name: 'Nelson', email: 'nelson123' } }

        const { user, logged } = authReducer( initialState, action )

        expect( user ).toEqual( action.payload )

        expect( logged ).toBeTruthy()

    });

    test('debe de (logout) borrar el name del usuario y el logged en false', () => {

        const action: types = { type : '[Auth] Logout' }

        const auth = authReducer( initialState, action )

        expect( auth ).toEqual( initialState )

        expect( auth.logged ).toBeFalsy()
    

    });

});