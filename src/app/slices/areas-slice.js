import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { initialAreas } from "../initial-state";

import { getUsersDocsAreas } from "../../utils/firebase/firebase";

export const getAreasData = createAsyncThunk(
    'areaHealth/getHealthAreaData',
    async (uid, rejectWithValue) => {
        try {
            const Health = await getUsersDocsAreas(uid, 'health');
            const People = await getUsersDocsAreas(uid, 'people');
            const Environment = await getUsersDocsAreas(uid, 'environment');
            const Growth = await getUsersDocsAreas(uid, 'growth');

            return { Health, People, Environment, Growth };
        } catch (error) {
            return rejectWithValue(error.messege)
        }
    }
);

export const areasSlice = createSlice({
    name: 'areas',
    initialState: initialAreas,
    reducers: {
        changeDisplay: (state, { payload }) => {
            state.displaySection = state.sections[payload];
        },
        currentStateOpen: (state) => {
            state.displaySection.stateOpen = !state.displaySection.stateOpen;
        },
        addNewQuest: (state, { payload }) => {
            const { title } = payload;
            state.displaySection.quests.push(payload);
            state.sections[title].quests.push(payload);
        },
        deleteQuest: (state, { payload }) => {
            const { title, id } = payload;
            state.displaySection.quests = state.displaySection.quests?.filter(quest => quest.id !== id);
            state.sections[title].quests = state.sections[title].quests?.filter(quest => quest.id !== id);
        },
        updateQuestAction: (state, { payload }) => {
            const { pointId, questIndex, status, data, questTitle } = payload;
            state.sections[questTitle].quests[questIndex].quest.achieve = state.sections[questTitle].quests[questIndex].quest.achieve?.map(point => point.id === pointId ? { ...point, status } : point);
            // state.displaySection.quests[questIndex].quest.achieve = state.displaySection.quests[questIndex].quest.achieve?.map(point => point.id === pointId ? { ...point, status } : point);
        },
        changeStatusToReload: (state) => {
            state.status = 'reload';
        },

    },
    extraReducers: {
        [getAreasData.pending]: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [getAreasData.fulfilled]: (state, { payload }) => {
            state.status = 'resolved';
            state.sections = payload;
            state.displaySection = payload.Health;
        },
        [getAreasData.rejected]: (state, { payload }) => {
            state.status = 'rejected';
            state.error = payload;
        }
    }
});

export const selectAreas = (state) => state.areas.sections;
export const selectDisplaySection = (state) => state.areas.displaySection;
export const selectAreasStatus = (state) => state.areas.status;

export const { changeDisplay, currentStateOpen, addNewQuest, changeStatusToReload, deleteQuest, updateQuestAction } = areasSlice.actions;

export default areasSlice.reducer;