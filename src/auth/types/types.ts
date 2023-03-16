export type types =
        | { type: '[Auth] Login', payload: { name: string, email: string } }
        | { type: '[Auth] Logout' }
        | { type: 'default' }
