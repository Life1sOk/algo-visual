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
            const { part, title, quest } = payload;
            const generateId = state.displaySection.parts[part]?.length + 1;
            state.displaySection.parts[part]?.push({ id: generateId, ...quest });
            state.sections[title]?.parts[part]?.push({ id: generateId, ...quest });
        },
        deleteQuest: (state, { payload }) => {
            const { part, title, questId } = payload;
            state.displaySection.parts[part] = state.displaySection.parts[part]?.filter(quest => quest.id !== questId);
            state.sections[title].parts[part] = state.sections[title]?.parts[part]?.filter(quest => quest.id !== questId);
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

export const { changeDisplay, currentStateOpen, addNewQuest, changeStatusToReload, deleteQuest } = areasSlice.actions;

export default areasSlice.reducer;