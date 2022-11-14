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
            state.displaySection.totalParts += 1;
            // Add to circle data
            const { title, color, totalQuests } = state.partToAdd;
            state.displaySection.parts.circle.labels.push(title);
            state.displaySection.parts.circle.datasets[0].data.push(totalQuests);
            state.displaySection.parts.circle.datasets[0].backgroundColor.push(color);
            state.sections[payload] = state.displaySection;
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
        }
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
export const selectDisplaySectionTitle = (state) => state.areas.displaySection.title;
export const selectAreasStatus = (state) => state.areas.status;

export const selectPartStatus = (state) => state.areas.partStatus;
export const selectToAddPart = (state) => state.areas.partToAdd;
export const selectToAddPartColor = (state) => state.areas.partToAdd.color;
export const selectAllParts = (state) => state.areas.displaySection.parts.allParts;
export const selectCircle = (state) => state.areas.displaySection.parts.circle;

export const { changeDisplay, currentStateOpen, addNewQuest, changeStatusToReload, deleteQuest, updateQuestAction, changeCurrentColor, changeToAddData, addPart, changePartStatusToReload, deletePart } = areasSlice.actions;

export default areasSlice.reducer;