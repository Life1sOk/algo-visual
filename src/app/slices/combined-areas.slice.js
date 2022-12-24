import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { getAllQuests, addQuestServer, deleteQuestServer } from "../../utils/firebase/firebase";

const initialState = {
    status: '',
    error: null,
    active: [],
    done: [],
    expired: [],
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
        // ------------------ Quest CRUD
        addQuestFromCurrentArea: (state, { payload }) => {
            const { data, uid } = payload;
            let countId = state.active.length + 1;

            const sendData = { ...data, id: countId }
            // Redux state
            state.active.push(sendData);
            // Server state
            addQuestServer(uid, sendData, 'active');
        },
        fixCurrentQuest: (state, {payload}) => {
            const { newOne, oldOne, uid } = payload;
            state.active = state.active.map(quest => quest.id === newOne.id ? newOne : quest);

            deleteQuestServer(uid, oldOne, 'active');
            addQuestServer(uid, newOne, 'active');
        },
        deleteQuestFromCombined: (state, { payload }) => {
            const { id, uid, data } = payload;
            // Redux
            state.active = state.active.filter(quest => quest.id !== id);
            // Server
            deleteQuestServer(uid, data, 'active');
        },
        // ------------------------- Point CRUD
        currentPointStatusChanger: (state, { payload }) => {
            const { questIndex, pointId, action, uid } = payload;

            // Server - delete
            let oldQuestToDelete = {...state.active[questIndex]};
            deleteQuestServer(uid, oldQuestToDelete, 'active');

            // Redux
            state.active[questIndex].quest.achieve = state.active[questIndex]?.quest.achieve.map(point => (
                point.id === pointId ? {...point, status: action} : point)
            );

            // Server - add
            addQuestServer(uid, state.active[questIndex], 'active');
        },
        // --------------------- Quest transfer
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
            state.active = active ? active.sort((a, b) => a.id - b.id) : [];
            state.done = done ? done.sort((a, b) => a.id - b.id) : [];
            state.expired = expired ? expired.sort((a, b) => a.id - b.id) : [];
        },
        [getCombinedAreas.rejected]: (state, { payload }) => {
            state.status = 'rejected';
            state.error = payload;
        }
    }
});

export const selectCombinedActive = (state) => state.combined.active;
export const selectCombinedStatus = (state) => state.combined.status;

export const selectCombinedDone = (state) => state.combined.done;
export const selectCombinedExpired = (state) => state.combined.expired;

export const { addQuestFromCurrentArea, deleteQuestFromCombined, fixCurrentQuest, currentPointStatusChanger, doneQuest } = combinedAreasSlice.actions;

export default combinedAreasSlice.reducer;