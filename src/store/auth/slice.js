import { handlePending, handleRejected, handleFulfilled, handleFulfiledLogin } from "./helpers";

const { createSlice } = require("@reduxjs/toolkit")
const { registrateThunk, authThunk, logoutThunk, loginThunk } = require("./actions")

const initialState = {
    name: '',
    email: '',
    isAuth: false,
    token: '',
    err: '',
    isLoading: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(registrateThunk.fulfilled, handleFulfiledLogin)
        .addCase(loginThunk.fulfilled, handleFulfiledLogin)
        .addCase(authThunk.fulfilled, (state, {payload}) => {
            state.name = payload.name
            state.email = payload.email
            state.isAuth = true
        })
        .addCase(logoutThunk.fulfilled, (state, _) => {
            state.name = ''
            state.email = ''
            state.isAuth = false
        })
        .addMatcher(action => action.type.endsWith('/pending'), handlePending)
        .addMatcher(action => action.type.endsWith('/rejected'), handleRejected)
        .addMatcher(
            action => action.type.endsWith('/fulfilled'),
            handleFulfilled
        );
    }
})

export const authReducer = authSlice.reducer