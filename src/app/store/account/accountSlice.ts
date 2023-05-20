import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SignInResponeUser } from 'core/auth/repositories/SignInRepository';

export interface AccountState {
    authenticated: boolean;
    user: SignInResponeUser
}

const initialState: AccountState = {
    authenticated: false,
    user: {
        username: "",
        token: ""
    }
}

export const accountSlice = createSlice({
    name: 'account',
    initialState,
    reducers: {
        authenticate: (state, action: PayloadAction<SignInResponeUser>) => {
            state.authenticated = true;
            state.user = { ...action.payload }
        },
        disconnect: (state) => {
            state.authenticated = initialState.authenticated
            state.user = {...initialState.user}
        },
    },
})

// Action creators are generated for each case reducer function
export const { authenticate, disconnect } = accountSlice.actions

export default accountSlice.reducer