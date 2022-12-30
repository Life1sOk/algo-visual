import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    linkWindowState: false, 
    all: [
        { title: 'Check 1', link: 'https://www.google.com/'},
        { title: 'Check 2', link: 'https://www.google.com/'},
        { title: 'Check 3', link: 'https://www.google.com/'},
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
        },
    }
});

export const selectLinks = (state) => state.links.all;
export const selectWindow = (state) => state.links.linkWindowState;

export const { addNewLink, linkOpen } = linksSlice.actions;

export default linksSlice.reducer;