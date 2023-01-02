import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    linkWindowState: false, 
    all: [
        { name: 'Check 1', url: 'https://www.google.com/'},
        { name: 'Check 2', url: 'https://www.google.com/'},
        { name: 'Check 3', url: 'https://www.google.com/'},
    ],
};

const linksSlice = createSlice({
    name: 'links',
    initialState,
    reducers: {
        linkOpen: (state, { payload }) => {
            state.linkWindowState = payload;
        },
        addNewLink: (state, { payload }) => {
            state.all.push(payload);
            state.linkWindowState = false;
        },
    }
});

export const selectLinks = (state) => state.links.all;
export const selectWindow = (state) => state.links.linkWindowState;

export const { addNewLink, linkOpen } = linksSlice.actions;

export default linksSlice.reducer;