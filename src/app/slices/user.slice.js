import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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

    }
})

export const selectUser = (state) => state.user;
// export const { } = userSlice.actions;

export default userSlice.reducer;