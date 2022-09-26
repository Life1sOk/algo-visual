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
    fixOutOfPlan: [
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
        accept: (state, { payload }) => {
            state.fixPlan = state.fixPlan.map(quest => {
                if (quest.id === payload.id) {
                    quest = { ...payload };
                }
                return quest;
            })
            state.tomorrowPlan = state.fixPlan;

            if (state.tomorrowPlan.length < state.fixPlan.length) {
                state.tomorrowPlan.push(payload);
            }
        },
        addQuest: (state) => {
            let lastId = state.fixPlan.length;
            const checkObject = state.fixPlan[lastId - 1]?.questName;

            if (state.fixPlan[0] && checkObject.length < 3) {
                alert('u already have to add');
                return;
            }

            state.fixPlan.push({ id: lastId + 1, ...state.blankQuest })
        },
        remove: (state, { payload }) => {
            state.fixPlan = state.fixPlan.filter(quest => quest.id !== payload);
            state.tomorrowPlan = state.fixPlan;
        },
        acceptOut: (state, { payload }) => {
            state.fixOutOfPlan = state.fixOutOfPlan.map(quest => {
                if (quest.id === payload.id) {
                    quest = { ...payload };
                }
                return quest;
            });
            state.outOfPlan = state.fixOutOfPlan;

            if (state.outOfPlan.length < state.fixOutOfPlan.length) {
                state.outOfPlan.push(payload);
            }
        },
        addQuestOut: (state) => {
            let lastId = state.fixOutOfPlan.length;
            const checkObject = state.fixOutOfPlan[lastId - 1]?.questName;

            if (state.fixOutOfPlan[0] && checkObject.length < 3) {
                alert('u already have to add');
                return;
            }

            state.fixOutOfPlan.push({ id: lastId + 1, ...state.blankQuest })
        },
        removeOut: (state, { payload }) => {
            state.fixOutOfPlan = state.fixOutOfPlan.filter(quest => quest.id !== payload);
            state.outOfPlan = state.fixOutOfPlan;
        },
    }
});

export const selectTomorrow = (state) => state.tomorrow.tomorrowPlan;
export const selectFixPlan = (state) => state.tomorrow.fixPlan;
export const selectOutOfPlan = (state) => state.tomorrow.outOfPlan;
export const selectFixOutOfPlan = (state) => state.tomorrow.fixOutOfPlan;

export const { remove, accept, addQuest, removeOut, acceptOut, addQuestOut, } = tomorrowSlice.actions;

export default tomorrowSlice.reducer;