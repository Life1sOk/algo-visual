import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { initialAreas } from "../initial-state";

import { getUsersDocsAreas, setAreasPartsCircle } from "../../utils/firebase/firebase";

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
        changeStatusToReload: (state) => {
            state.status = 'reload';
        },
        //Parts//
        partWindowOpenHandler: (state, {payload}) => {
            state.partWindowOpen = payload;
        },
        changeCurrentColor: (state, { payload }) => {
            state.partToAdd.color = payload;
        },
        changeToAddData: (state, { payload }) => {
            const { title, description } = payload;
            state.partToAdd.title = title;
            state.partToAdd.description = description;
        },
        addPart: (state, { payload }) => {
            let currentArea = state.displaySection;

            // Add to all parts array
            let newId = state.displaySection.parts.length;
            state.displaySection.parts.push({ ...state.partToAdd, id: newId });
            // Merge
            state.sections[currentArea.title] = state.displaySection;
            // Server
            setAreasPartsCircle(payload, currentArea.title.toLowerCase(), currentArea, true);
        },
        partsQuestCount: (state, { payload }) => {
            state.displaySection.parts = state.displaySection.parts.map((part, index) => {
                if (part.title === payload.title) {
                    return { ...part, totalQuests: Number(part.totalQuests += payload.count) }
                } else {
                    return part
                }
            });

            state.sections[payload.area] = state.displaySection;
        },
        deletePart: (state, { payload }) => {
            let totalParts = state.displaySection.parts.length;
            let currentArea = state.displaySection;

            const newCirlceParts = [];

            for (let i = 0; i < totalParts; i++) {
                if (i !== payload.index) {
                    newCirlceParts.push(state.displaySection.parts[i]);
                }
            }

            state.displaySection.parts = newCirlceParts;
            state.displaySection.totalParts -= 1;

            state.sections[currentArea.title] = state.displaySection;

            setAreasPartsCircle(payload.uid, currentArea.title.toLowerCase(), currentArea, true);
        },
        changePartStatusToReload: (state, { payload }) => {
            state.partStatus = payload;
        },        
    },
    extraReducers: {
        [getAreasData.pending]: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [getAreasData.fulfilled]: (state, { payload }) => {
            state.status = 'resolved';
            const { Health, People, Environment, Growth } = payload;
            if(Health) {
                state.sections.Health = Health;
            }
            if(People) {
                state.sections.People = People;
            }
            if(Environment) {
                state.sections.Environment = Environment;
                state.displaySection = Environment;
            }
            if(Growth) {
                state.sections.Growth = Growth;
            }
        },
        [getAreasData.rejected]: (state, { payload }) => {
            state.status = 'rejected';
            state.error = payload;
        }
    }
});

export const selectAreas = (state) => state.areas.sections;

export const selectDisplaySection = (state) => state.areas.displaySection;
export const selectDisplayParts = (state) => state.areas.displaySection.parts;
export const selectDisplaySectionTitle = (state) => state.areas.displaySection.title;
export const selectAreasStatus = (state) => state.areas.status;

export const selectPartWindowOpen = (state) => state.areas.partWindowOpen;
export const selectPartStatus = (state) => state.areas.partStatus;
export const selectToAddPart = (state) => state.areas.partToAdd;
export const selectToAddPartColor = (state) => state.areas.partToAdd.color;

export const selectParts = (state) => state.areas.displaySection.parts;

export const { changeDisplay, currentStateOpen, changeStatusToReload, changeCurrentColor, changeToAddData, addPart, changePartStatusToReload, deletePart, partsQuestCount, partWindowOpenHandler } = areasSlice.actions;

export default areasSlice.reducer;