import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tomorrowPlan: [
        {
            id: 1,
            questName: 'First need to do!',
            description: 'Some description to this current quest for stupid guys! Some discription to this current quest for stupid guys!'
        },
        {
            id: 2,
            questName: 'Second need to do!',
            description: 'Some description to this current quest for stupid guys! Some discription to this current quest for stupid guys!'
        },
        {
            id: 3,
            questName: 'Third need to do!',
            description: 'Some description to this current quest for stupid guys! Some discription to this current quest for stupid guys!'
        },
        {
            id: 4,
            questName: 'Atd. need to do!',
            description: 'Some description to this current quest for stupid guys! Some discription to this current quest for stupid guys!'
        },
    ],
    outOfPlan: [
        {
            id: 80,
            questName: 'First out of plan!',
            description: 'Some description to this current quest for stupid guys! Some discription to this current quest for stupid guys!'
        },
        {
            id: 81,
            questName: 'Second out of plan!',
            description: 'Some description to this current quest for stupid guys! Some discription to this current quest for stupid guys!'
        },
        {
            id: 82,
            questName: 'Third out of plan!',
            description: 'Some description to this current quest for stupid guys! Some discription to this current quest for stupid guys!'
        },
    ],
}

export const tomorrowSlice = createSlice({
    name: 'tomorrow',
    initialState,
    reducers: {
        accept: (state, { payload }) => {
            state.tomorrowPlan = state.tomorrowPlan.map(quest => {
                if (quest.id === payload.id) {
                    quest = { ...payload };
                }
                return quest;
            })
        },
        clear: (state, { payload }) => {
            state.tomorrowPlan = state.tomorrowPlan.map(quest => quest.id === payload ? { id: payload, questName: '', description: '' } : quest)
            console.log(state.tomorrowPlan)
        },
        remove: (state, { payload }) => {
            state.tomorrowPlan = state.tomorrowPlan.filter(quest => quest.id !== payload.id);
        },
    }
});

export const selectTomorrow = (state) => state.tomorrow.tomorrowPlan;
export const selectOutOfPlan = (state) => state.tomorrow.outOfPlan;

export const { remove, accept, clear } = tomorrowSlice.actions;

export default tomorrowSlice.reducer;