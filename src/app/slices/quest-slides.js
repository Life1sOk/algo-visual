import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    one: {
        active: true,
        done: false,
    },
    two: {
        active: false,
        done: false,
    },
    three: {
        active: false,
        done: false,
    },
}

const questSlideSlice = createSlice({
    name: 'questSlide',
    initialState,
    reducers: {
        oneActive: (state) => {
            state.one.active = true;
            state.two.active = false;
            state.three.active = false;
        },
        twoActive: (state) => {
            state.one.active = false;
            state.two.active = true;
            state.three.active = false;
        },
        threeActive: (state) => {
            state.one.active = false;
            state.two.active = false;
            state.three.active = true;
        },
        oneDone: (state, { payload }) => {
            if (payload === 'fix') return state.one.done = false;
            if (payload === 'done') return state.one.done = true;
        },
        twoDone: (state, { payload }) => {
            if (payload === 'fix') return state.two.done = false;
            if (payload === 'done') return state.two.done = true;
        },
        threeDone: (state, { payload }) => {
            if (payload === 'fix') return state.three.done = false;
            if (payload === 'done') return state.three.done = true;
        },
    },
});

export const selectSlideOne = (state) => state.questSlide.one;
export const selectSlideTwo = (state) => state.questSlide.two;
export const selectSlideThree = (state) => state.questSlide.three;

export const { oneActive, twoActive, threeActive, oneDone, twoDone, threeDone } = questSlideSlice.actions;

export default questSlideSlice.reducer;