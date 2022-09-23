import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tomorrowPlan: [
        {
            id: 50,
            questName: 'First need to do!',
            discription: 'Some discription to this current quest for stupid guys! Some discription to this current quest for stupid guys!'
        },
        {
            id: 51,
            questName: 'Second need to do!',
            discription: 'Some discription to this current quest for stupid guys! Some discription to this current quest for stupid guys!'
        },
        {
            id: 52,
            questName: 'Third need to do!',
            discription: 'Some discription to this current quest for stupid guys! Some discription to this current quest for stupid guys!'
        },
        {
            id: 53,
            questName: 'Atd. need to do!',
            discription: 'Some discription to this current quest for stupid guys! Some discription to this current quest for stupid guys!'
        },
    ],
    outOfPlan: [
        {
            id: 80,
            questName: 'First out of plan!',
            discription: 'Some discription to this current quest for stupid guys! Some discription to this current quest for stupid guys!'
        },
        {
            id: 81,
            questName: 'Second out of plan!',
            discription: 'Some discription to this current quest for stupid guys! Some discription to this current quest for stupid guys!'
        },
        {
            id: 82,
            questName: 'Third out of plan!',
            discription: 'Some discription to this current quest for stupid guys! Some discription to this current quest for stupid guys!'
        },
    ],
}

export const tomorrowSlice = createSlice({
    name: 'tomorrow',
    initialState,
    reducers: {

    }
});

export const selectTomorrow = (state) => state.tomorrow.tomorrowPlan;
export const selectOutOfPlan = (state) => state.tomorrow.outOfPlan;

export default tomorrowSlice.reducer;