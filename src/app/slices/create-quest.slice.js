import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    main: {
        name: '',
        createdTime: '',
        untilTime: '',
        needForAchive: [],
    },
    blank: {
        name: '',
        createdTime: '',
        untileTime: '',
        needForAchive: [],
    }
}

export const createQuestSlice = createSlice({
    name: 'createQuest',
    initialState,
    reducers: {
        nameHandler: (state, { payload }) => {
            state.main.name = payload;
        },
        createdTimeHandler: (state, { payload }) => {
            state.main.createdTime = payload;
        },
        untilTimeHandler: (state, { payload }) => {
            state.main.untilTime = payload;
        },
        addNewItem: (state) => {
            const createId = state.main.needForAchive.length + 1;

            state.main.needForAchive.push({
                id: createId,
                status: false,
                description: '',
            })
        }
    }
});

export const selectQuest = (state) => state.createQuest.main;
export const selectNeedForAchive = (state) => state.createQuest.main.needForAchive;

export const { nameHandler, createdTimeHandler, untilTimeHandler, addNewItem } = createQuestSlice.actions;

export default createQuestSlice.reducer;