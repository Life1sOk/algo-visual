import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { getAllQuests, addQuestServer, deleteQuestServer } from "../../utils/firebase/firebase";

const initialState = {
    status: '',
    error: null,
    active: [],
    done: [],
    expired: [],
    questFixPoint: {},
};

export const getCombinedAreas = createAsyncThunk(
    'combined/getCombinedAreas',
    async (uid, rejectWithValue) => {
        try {
            const allQuests = await getAllQuests(uid);
            return allQuests;
        } catch (error) {
            return rejectWithValue(error.messege)
        }
    }
);

const combinedAreasSlice = createSlice({
    name: 'combined',
    initialState,
    reducers: {
        // Quest CRUD
        addQuestFromCurrentArea: (state, { payload }) => {
            state.active.push(payload);
            state.status = 'reload';
        },
        fixCurrentQuest: (state, {payload}) => {
            state.active = state.active.map(quest => quest.id === payload.id ? payload : quest);
        },
        deleteQuestFromCombined: (state, { payload }) => {
            state.active = state.active.filter(quest => quest.id !== payload);
        },
        changeCombinedStatus: (state, { payload }) => {
            state.status = payload;
        },
        // Point CRUD
        currentPointStatusChanger: (state, { payload }) => {
            const { questIndex, pointId, action } = payload;

            state.active[questIndex].quest.achieve = state.active[questIndex]?.quest.achieve.map(point => (
                point.id === pointId ? {...point, status: action} : point));
        },
        fixCurrentQuestCopy: (state, { payload }) => {
            state.questFixPoint = state.active[payload];
        },
        fixCurrentQuestCopyClear: (state) => {
            state.questFixPoint = {};
        },
        // Quest transfer
        doneQuest: (state, {payload}) => {
            const { id, uid, from, to } = payload;

            let fixQuest = {};

            state.active = state.active.filter(quest => {
                if(quest.id === id) {
                    state.done.push({...quest, id: 1000 + quest.id});
                    fixQuest = {...quest, id: 1000 + quest.id};
                }
                return quest.id !== id;
            });

            // Server change 
            deleteQuestServer(uid, fixQuest, from);
            addQuestServer(uid, fixQuest, to);
        },
    },
    extraReducers: {
        [getCombinedAreas.pending]: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [getCombinedAreas.fulfilled]: (state, { payload }) => {
            const { active, done, expired } = payload;
            state.status = 'resolved';
            state.active = active?.sort((a, b) => a.id - b.id);
            state.done = done?.sort((a, b) => a.id - b.id);
            state.expired = expired?.sort((a, b) => a.id - b.id);
        },
        [getCombinedAreas.rejected]: (state, { payload }) => {
            state.status = 'rejected';
            state.error = payload;
        }
    }
});

export const selectCombinedActive = (state) => state.combined.active;
export const selectCombinedStatus = (state) => state.combined.status;
export const selectQuestFixPoint = (state) => state.combined.questFixPoint;

export const selectCombinedDone = (state) => state.combined.done;
export const selectCombinedExpired = (state) => state.combined.expired;

export const { addQuestFromCurrentArea, deleteQuestFromCombined, changeCombinedStatus, fixCurrentQuest, currentPointStatusChanger, fixCurrentQuestCopy, fixCurrentQuestCopyClear, doneQuest } = combinedAreasSlice.actions;

export default combinedAreasSlice.reducer;