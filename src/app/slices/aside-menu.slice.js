import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    areaState: true,
}

export const asideMenuSlice = createSlice({
    name: 'aside',
    initialState,
    reducers: {
        areaToggleState: (state) => {
            state.areaState = !state.areaState;
        }
    },
});

export const selectAreaState = (state) => state.aside.areaState;

export const { areaToggleState } = asideMenuSlice.actions;

export default asideMenuSlice.reducer;