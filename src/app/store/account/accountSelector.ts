import { AccountState } from "./accountSlice";

interface State{
    userAuthenticated: AccountState;
}

export const accountAuthenticatedSelector = ()=>{
    return (state: State)=> state.userAuthenticated.authenticated
}

export const accountUserSelector = ()=>{
    return (state: State)=> state.userAuthenticated.user
}