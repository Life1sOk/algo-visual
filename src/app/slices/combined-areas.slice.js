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
            // Check ?
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
            // const { questIndex, pointId, action, uid } = payload;
            const {uid, questIndex, pointId, status, stepIndex} = payload;

            for( let i=0; i<state.active.length; i++) {

            };

            // Server - delete
            // let oldQuestToDelete = {...state.active[questIndex]};
            // deleteQuestServer(uid, oldQuestToDelete, 'active'); //

            // Redux
            state.active[questIndex].quest.steps[stepIndex].points = state.active[questIndex].quest.steps[stepIndex].points.map(point => (
                point.id === pointId ? {...point, status} : point)
            ).sort((a,b) => a.status - b.status);

            // Server - add
            // addQuestServer(uid, state.active[questIndex], 'active');
        },
        // --------------------- Quest transfer
        doneQuest: (state, {payload}) => {
            const { id, uid, from, to } = payload;
            if(from === 'active') {
                state.active = state.active.filter(quest => {
                    if(quest.id === id) {
                        let fixedQuest = {...quest, id: 1000 + quest.id};
                        // Delete server
                        deleteQuestServer(uid, quest, from);
                        // Redux transfer to done
                        if(to === 'done') state.done.push(fixedQuest);
                        if(to === 'expired') state.expired.push(fixedQuest);
                        // Server change 
                        addQuestServer(uid, fixedQuest, to);
                    }
                    return quest.id !== id;
                });
            };
            if(from === 'done') {
                state.done = state.done.filter(quest => {
                    if(quest.id === id) {
                        let fixedQuest = {...quest, id: 1000 + quest.id};
                        // Delete server
                        deleteQuestServer(uid, quest, from);
                        // Redux transfer to done
                        if(to === 'active') state.done.push(fixedQuest);
                        if(to === 'expired') state.expired.push(fixedQuest);
                        // Server change 
                        addQuestServer(uid, fixedQuest, to);
                    }
                    return quest.id !== id;
                });
            };
            if(from === 'expired') {
                state.expired = state.expired.filter(quest => {
                    if(quest.id === id) {
                        let fixedQuest = {...quest, id: 1000 + quest.id};
                        // Delete server
                        deleteQuestServer(uid, quest, from);
                        // Redux transfer to done
                        if(to === 'done') state.done.push(fixedQuest);
                        if(to === 'active') state.expired.push(fixedQuest);
                        // Server change 
                        addQuestServer(uid, fixedQuest, to);
                    }
                    return quest.id !== id;
                });
            }
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