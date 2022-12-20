import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { getAllQuests } from "../../utils/firebase/firebase";

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

            state.active[questIndex].quest.achieve = state.active[questIndex].quest.achieve.map(point => (
                point.id === pointId ? {...point, status: action} : point
            ));
        },
        fixCurrentQuestCopy: (state, { payload }) => {
            state.questFixPoint = state.active[payload];
        },
        fixCurrentQuestCopyClear: (state) => {
            state.questFixPoint = {};
        },
        // Quest transfer
        doneQuest: (state, {payload}) => {
        },
    },
    extraReducers: {
        [getCombinedAreas.pending]: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [getCombinedAreas.fulfilled]: (state, { payload }) => {
            state.status = 'resolved';
            state.active = payload.active?.sort((a, b) => a.id - b.id);
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

export const { addQuestFromCurrentArea, deleteQuestFromCombined, changeCombinedStatus, fixCurrentQuest, currentPointStatusChanger, fixCurrentQuestCopy, fixCurrentQuestCopyClear } = combinedAreasSlice.actions;

export default combinedAreasSlice.reducer;