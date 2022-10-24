import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    createdTime: '',
    main: {},
    achieve: [],
    daily: [],
}


export const createQuestSlice = createSlice({
    name: 'createQuest',
    initialState,
    reducers: {
        mainAccept: (state, { payload }) => {
            state.main = { ...payload }
        },
        addAchieve: (state, { payload }) => {
            state.achieve.push(payload);
        },
        addDaily: (state, { payload }) => {
            state.daily.push(payload);
        }
    }
});

export const selectCreateQuest = (state) => state.createQuest;
export const selectCreateQuestMain = (state) => state.createQuest.main;
export const selectCreateQuestAchieve = (state) => state.createQuest.achieve;
export const selectCreateQuestDaily = (state) => state.createQuest.daily;

export const { mainAccept, addAchieve, addDaily } = createQuestSlice.actions;

export default createQuestSlice.reducer;