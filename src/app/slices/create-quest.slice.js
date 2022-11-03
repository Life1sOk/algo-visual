import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    state: false,
    reset: 'no',
    add: {
        createdTime: '',
        main: {},
        achieve: [],
        daily: [],
    },
}

export const createQuestSlice = createSlice({
    name: 'createQuest',
    initialState,
    reducers: {
        setOpen: (state) => {
            state.state = !state.state;
        },
        setReset: (state, { payload }) => {
            state.reset = payload;
            state.add.achieve = [];
            state.add.daily = [];
        },
        mainAccept: (state, { payload }) => {
            state.add.main = { ...payload };
        },
        addAchieve: (state, { payload }) => {
            state.add.achieve.push(payload);
        },
        addDaily: (state, { payload }) => {
            state.add.daily.push(payload);
        },
        deleteAchieve: (state, { payload }) => {
            state.add.achieve = state.add.achieve.filter(quest => quest.id !== payload);
        },
        deleteDaily: (state, { payload }) => {
            state.add.daily = state.add.daily.filter(daily => daily.id !== payload);
        }
    }
});

export const selectCreateQuest = (state) => state.createQuest.add;
export const selectCreateQuestMain = (state) => state.createQuest.add.main;
export const selectCreateQuestAchieve = (state) => state.createQuest.add.achieve;
export const selectCreateQuestDaily = (state) => state.createQuest.add.daily;
export const selectCreateQuestState = (state) => state.createQuest.state;
export const selectCreateQuestReset = (state) => state.createQuest.reset;

export const { mainAccept, addAchieve, addDaily, setOpen, setReset, deleteAchieve, deleteDaily } = createQuestSlice.actions;

export default createQuestSlice.reducer;