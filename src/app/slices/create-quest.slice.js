import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    main: {
        title: '',
        description: '',
        mainGoal: '',
        current: '',
        achieve: [

        ],
        everyDayTo: [

        ],
    },
    blank: {
        title: '',
        description: '',
        mainGoal: '',
        current: '',
        achieve: [
            {
                id: 1,
                title: 'B2',
                createdTime: 'today',
                untilTime: '',
                description: 'Find some date with examse',
            }
        ],
        everyDayTo: [
            {
                id: 1,
                questName: '',
                description: '',
            },
        ],
    }
}

export const createQuestSlice = createSlice({
    name: 'createQuest',
    initialState,
    reducers: {
    }
});

export const { } = createQuestSlice.actions;

export default createQuestSlice.reducer;