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
    count: 0,
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
            if (payload === 'fix') {
                state.one.done = false;
                state.count = state.count - 1;
            } else {
                state.one.done = true;
                state.count = state.count + 1;
            }
        },
        twoDone: (state, { payload }) => {
            if (payload === 'fix') {
                state.two.done = false;
                state.count = state.count - 1;
            } else {
                state.two.done = true;
                state.count = state.count + 1;
            }
        },
        threeDone: (state, { payload }) => {
            if (payload === 'fix') {
                state.three.done = false;
                state.count = state.count - 1;
            } else {
                state.three.done = true;
                state.count = state.count + 1;
            }
        }
    },
});

export const selectSlideOne = (state) => state.questSlide.one;
export const selectSlideTwo = (state) => state.questSlide.two;
export const selectSlideThree = (state) => state.questSlide.three;
export const selectSlidesCount = (state) => state.questSlide.count;

export const { oneActive, twoActive, threeActive, oneDone, twoDone, threeDone } = questSlideSlice.actions;

export default questSlideSlice.reducer;