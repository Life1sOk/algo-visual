import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loggedIn: false,
    userName: 'Andrew Tsoy',
    userId: '123',
    userImage: 'https://img.freepik.com/premium-vector/cute-robot-waving-hand-cartoon-character-science-technology-isolated_138676-3155.jpg?w=2000',
    userEmail: '',
    userPhrase: 'Find your lovely phrase which motivates you to do your best every day!',
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signInUser: (state, { payload }) => {
            state.loggedIn = payload;
        }
    }
})

export const selectUser = (state) => state.user;
export const selectUserLoggedIn = (state) => state.user.loggedIn;
export const { signInUser } = userSlice.actions;

export default userSlice.reducer;