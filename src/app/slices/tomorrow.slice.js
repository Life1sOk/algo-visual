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
    fixPlan: [
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
    blankQuest: {
        questName: '',
        description: ''
    }
}

export const tomorrowSlice = createSlice({
    name: 'tomorrow',
    initialState,
    reducers: {
        accept: (state, { type, payload }) => {
            if (type === 'accept') {
                console.log('accept')
                state.tomorrowPlan = state.tomorrowPlan.map(quest => {
                    if (quest.id === payload.id) {
                        quest = { ...payload };
                    }
                    return quest;
                })
            }
        },
        addQuest: (state) => {
            let lastId = state.tomorrowPlan.length;
            const checkObject = state.tomorrowPlan[lastId - 1]?.questName;

            if (state.tomorrowPlan[0] && checkObject.length < 3) {
                alert('u already have to add');
                return;
            }

            state.tomorrowPlan.push({ id: lastId + 1, ...state.blankQuest })
        },
        remove: (state, { payload }) => {
            state.tomorrowPlan = state.tomorrowPlan.filter(quest => quest.id !== payload);
        },
    }
});

export const selectTomorrow = (state) => state.tomorrow.tomorrowPlan;
export const selectFixPlan = (state) => state.tomorrow.fixPlan;
export const selectOutOfPlan = (state) => state.tomorrow.outOfPlan;

export const { remove, accept, addQuest } = tomorrowSlice.actions;

export default tomorrowSlice.reducer;