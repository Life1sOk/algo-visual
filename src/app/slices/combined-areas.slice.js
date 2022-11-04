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
            const { title, quest } = payload;
            let generateNewId = state.all.length + 1;
            state.all.push({ title, quest: { ...quest, id: generateNewId } });
            state.status = 'reload';
        },
        deleteQuestFromCombined: (state, { payload }) => {
            const { id } = payload;
            state.all = state.all.filter(quest => quest.id !== id);
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

export const { addQuestFromCurrentArea, chageQuestPoint, deleteQuestFromCombined } = combinedAreasSlice.actions;

export default combinedAreasSlice.reducer;