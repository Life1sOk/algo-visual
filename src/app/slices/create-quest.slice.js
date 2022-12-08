import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    reset: 'no',
    windowStateOpen: false,
    whichOne: 'Add',
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
        },
        // Window open / close
        windowHandler: (state, {payload}) => {
            state.windowStateOpen = payload;
        },
        // Wich One state 
        widnowSwitcher: (state, {payload}) => {
            state.whichOne = payload;
        },
    }
});

export const selectCreateQuest = (state) => state.createQuest.add;
export const selectWindowStateOpen = (state) => state.createQuest.windowStateOpen;
export const selectWichOne = (state) => state.createQuest.whichOne;
export const selectCreateQuestMain = (state) => state.createQuest.add.main;
export const selectCreateQuestAchieve = (state) => state.createQuest.add.achieve;
export const selectCreateQuestDaily = (state) => state.createQuest.add.daily;
export const selectCreateQuestReset = (state) => state.createQuest.reset;

export const { mainAccept, addAchieve, addDaily, setReset, deleteAchieve, deleteDaily, windowHandler, widnowSwitcher } = createQuestSlice.actions;

export default createQuestSlice.reducer;