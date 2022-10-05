import { createSlice } from "@reduxjs/toolkit";

import { initialAreas } from "../initial-state";

export const areasSlice = createSlice({
    name: 'areas',
    initialState: initialAreas,
    reducers: {
        changeDisplay: (state, { payload }) => {
            state.displaySection = state.sections.find(sec => sec.id === payload)
        },
        currentStateOpen: (state) => {
            state.displaySection.stateOpen = !state.displaySection.stateOpen;
        }
    }
});

export const selectAreas = (state) => state.areas.sections;
export const selectDisplaySection = (state) => state.areas.displaySection;

export const { changeDisplay, currentStateOpen } = areasSlice.actions;

export default areasSlice.reducer;