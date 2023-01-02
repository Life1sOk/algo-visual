import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { getMainExtraLinks, setMainExtraLinks } from "../../utils/firebase/firebase";

const initialState = {
    state: '',
    linkWindowState: false, 
    links: [],
};

export const getMainLinksData = createAsyncThunk(
    'links/getMainLinksData',
    async (uid, rejectWithValue) => {
        try {
            const response = await getMainExtraLinks(uid);
            return response;
        } catch (error) {
            return rejectWithValue(error.messege);
        }
    }
)

const linksSlice = createSlice({
    name: 'links',
    initialState,
    reducers: {
        linkOpen: (state, { payload }) => {
            state.linkWindowState = payload;
        },
        addNewLink: (state, { payload }) => {
            const { data, uid } = payload;
            // Redux + link + window(close)
            state.links.push(data);
            state.linkWindowState = false;
            // Server add
            setMainExtraLinks(uid, data);
        },
    },
    extraReducers: {
        [getMainLinksData.pending]: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [getMainLinksData.fulfilled]: (state, { payload }) => {
            state.status = 'resolved';
            if(payload) state.links = payload.data;
        },
        [getMainLinksData.rejected]: (state, {payload}) => {
            state.status = 'rejected';
            state.error = payload;
        },
    }
});

export const selectLinks = (state) => state.links.links;
export const selectWindow = (state) => state.links.linkWindowState;

export const { addNewLink, linkOpen } = linksSlice.actions;

export default linksSlice.reducer;