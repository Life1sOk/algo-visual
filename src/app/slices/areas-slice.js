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
        changeStatusToReload: (state) => {
            state.status = 'reload';
        },
        //Parts//
        changeCurrentColor: (state, { payload }) => {
            state.partToAdd.color = payload;
        },
        changeToAddData: (state, { payload }) => {
            const { title, description } = payload;
            state.partToAdd.title = title;
            state.partToAdd.description = description;
        },
        addPart: (state, { payload }) => {
            // Add to all parts array
            let newId = state.displaySection.parts.allParts.length;
            state.displaySection.parts.allParts.push({ ...state.partToAdd, id: newId });
            // Add to circle data
            const { title, color, totalQuests } = state.partToAdd;
            state.displaySection.parts.circle.labels.push(title);
            state.displaySection.parts.circle.datasets[0].data.push(totalQuests);
            state.displaySection.parts.circle.datasets[0].backgroundColor.push(color);
            state.sections[payload] = state.displaySection;
        },
        partsQuestCount: (state, { payload }) => {
            let activeIndex = null;
            state.displaySection.parts.allParts = state.displaySection.parts.allParts.map((part, index) => {
                if (part.title === payload.title) {
                    activeIndex = index;
                    return { ...part, totalQuests: Number(part.totalQuests += payload.count) }
                } else {
                    return part
                }
            });
            state.displaySection.parts.circle.datasets[0].data[activeIndex] = state.displaySection.parts.circle.datasets[0].data[activeIndex] + payload.count;
            state.sections[payload.area] = state.displaySection;
        },
        deletePart: (state, { payload }) => {
            let totalParts = state.displaySection.parts.allParts.length;

            const newCirlceParts = [];
            const newCircleData = [];
            const newCircleBackground = [];
            const newCircleLabels = [];

            for (let i = 0; i < totalParts; i++) {
                if (i !== payload.index) {
                    newCirlceParts.push(state.displaySection.parts.allParts[i]);
                    newCircleData.push(state.displaySection.parts.circle.datasets[0].data[i]);
                    newCircleBackground.push(state.displaySection.parts.circle.datasets[0].backgroundColor[i]);
                    newCircleLabels.push(state.displaySection.parts.circle.labels[i]);
                }
            }

            state.displaySection.parts.allParts = newCirlceParts;
            state.displaySection.parts.circle.datasets[0].data = newCircleData;
            state.displaySection.parts.circle.datasets[0].backgroundColor = newCircleBackground;
            state.displaySection.parts.circle.labels = newCircleLabels;
            state.displaySection.totalParts -= 1;

            state.sections[payload.area] = state.displaySection;
        },
        changePartStatusToReload: (state, { payload }) => {
            state.partStatus = payload;
        },
        // Statistic
        
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
export const selectDisplayParts = (state) => state.areas.displaySection.parts;
export const selectDisplaySectionTitle = (state) => state.areas.displaySection.title;
export const selectAreasStatus = (state) => state.areas.status;

export const selectPartStatus = (state) => state.areas.partStatus;
export const selectToAddPart = (state) => state.areas.partToAdd;
export const selectToAddPartColor = (state) => state.areas.partToAdd.color;
export const selectAllParts = (state) => state.areas.displaySection.parts.allParts;
export const selectCircle = (state) => state.areas.displaySection.parts.circle;

export const { changeDisplay, currentStateOpen, changeStatusToReload, changeCurrentColor, changeToAddData, addPart, changePartStatusToReload, deletePart, partsQuestCount } = areasSlice.actions;

export default areasSlice.reducer;