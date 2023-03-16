import { types  } from "../types/types";


export interface initialState{
    logged: boolean
    user?:  { name: string, email: string }
}

export const authReducer = ( initialState : initialState, action : types) : initialState => {

    switch (action.type) {
        case '[Auth] Login':
            return {
                ...initialState,
                logged:  true,
                user: action.payload
            }
        case '[Auth] Logout':
            return {
                logged: false,
            }
        default:
            return initialState
    }

}