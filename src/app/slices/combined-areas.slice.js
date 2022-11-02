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
            const { part, title, quest } = payload;
            let generateNewId = state.all.length + 1;
            state.all.push({ part, title, quest: { ...quest, id: generateNewId } });
            state.status = 'reload';
        },
        chageQuestPoint: (state, { payload }) => {
            const { pointId, questId, status } = payload;
            state.all[questId].quest.achieve = state.all[questId].quest.achieve.map(point =>
                point.id === pointId ? { ...point, status } : point)
            state.status = 'reload';
            // also need send it to the server some where;
        },
        addPointToActiveAll: (state, { payload }) => {
            state.all.push(payload);
        },
        changeQuestStatus: (state) => {
            state.status = 'active';
        }
    },
    extraReducers: {
        [getCombinedAreas.pending]: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [getCombinedAreas.fulfilled]: (state, { payload }) => {
            state.status = 'resolved';
            state.all = payload;
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

export const { addQuestFromCurrentArea, chageQuestPoint, changeQuestStatus } = combinedAreasSlice.actions;

export default combinedAreasSlice.reducer;