import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { getAllQuests } from "../../utils/firebase/firebase";

const initialState = {
    status: '',
    error: null,
    all: [],
    activePoints: [],
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
        addQuestFromCurrentArea: (state, { payload }) => {
            state.all.push(payload);
            state.status = 'reload';
        },
        deleteQuestFromCombined: (state, { payload }) => {
            state.all = state.all.filter(quest => quest.id !== payload);
        },
        chageQuestPoint: (state, { payload }) => {
            const { pointId, questIndex, status, data } = payload;
            state.all[questIndex].quest.achieve = state.all[questIndex].quest.achieve.map(point =>
                point.id === pointId ? { ...point, status } : point);
            if (status) state.activePoints.push(data);
            if (!status) state.activePoints = state.activePoints.filter(point => point.id !== data.id);
        },
        addPointToActiveAll: (state, { payload }) => {
            state.all.push(payload);
        },
        changeCombinedStatus: (state, { payload }) => {
            state.status = payload;
        }
    },
    extraReducers: {
        [getCombinedAreas.pending]: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [getCombinedAreas.fulfilled]: (state, { payload }) => {
            state.status = 'resolved';
            state.all = payload.all;
            state.activePoints = payload.activePoints;
        },
        [getCombinedAreas.rejected]: (state, { payload }) => {
            state.status = 'rejected';
            state.error = payload;
        }
    }
});

export const selectCombinedAll = (state) => state.combined.all;
export const selectCombinedStatus = (state) => state.combined.status;
export const selectActivePoints = (state) => state.combined.activePoints;

export const { addQuestFromCurrentArea, chageQuestPoint, deleteQuestFromCombined, changeCombinedStatus } = combinedAreasSlice.actions;

export default combinedAreasSlice.reducer;