import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userAuth: {
        loggedIn: false,
        uid: null,
    }
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signInUser: (state, { payload }) => {
            state.userAuth = payload;
        },
        signOut: (state) => {
            state.userAuth = {
                loggedIn: false,
                uid: null,
            }
        }
    }
})

export const selectAuth = (state) => state.auth.userAuth;
export const selectAuthLoggedIn = (state) => state.auth.userAuth.loggedIn;
export const selectAuthUid = (state) => state.auth.userAuth.uid;
export const { signInUser, signOut } = authSlice.actions;

export default authSlice.reducer;