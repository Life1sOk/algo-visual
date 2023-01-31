import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    reset: 'no',
    windowStateOpen: false,
    whichOne: 'Add',
    fixState: false,
    add: {
        createdTime: '',
        main: {},
        steps: [],
    },
    activeStep: 0,
    storeOldQuest: {},
}

export const createQuestSlice = createSlice({
    name: 'createQuest',
    initialState,
    reducers: {
        setReset: (state, { payload }) => {
            state.reset = payload;
            state.add.steps = [];
            state.add.daily = [];
        },
        mainAccept: (state, { payload }) => {
            state.add.main = { ...payload };
        },
        // Steps
        activeStepHandler: (state, {payload}) => {
            state.activeStep = payload;
        },
        addSteps: (state, { payload }) => {
            state.add.steps.push(payload);
        },
        deleteSteps: (state, { payload }) => {
            state.add.steps = state.add.steps.filter(quest => quest.id !== payload);
        },
        // Points
        addPoints: (state, { payload }) => {
            let index = state.activeStep;
            const generateId = state.add.steps[index].points.length;
            state.add.steps[index].points.push({...payload, id: generateId});
        },
        deletePoints: (state, { payload }) => {
            let index = state.activeStep;
            state.add.steps[index].points = state.add.steps[index].points.filter(point => point.id !== payload);
        },
        fixPointsHeight: (state, {payload}) => {
            const {id, height} = payload;
            let index = state.activeStep;
            state.add.steps[index].points = state.add.steps[index].points.map(point => point.id === id ? {...point, height} : point)
        },
        // Fix quest
        fixQuest: (state, {payload}) => {
            const { quest } = payload;
            state.add = quest;
            state.storeOldQuest = payload;
        },
        fixState: (state, {payload}) => {
            state.fixState = payload;
        },
        // Window open / close
        windowHandler: (state, {payload}) => {
            state.windowStateOpen = payload;
        },
        // Wich One state 
        windowSwitcher: (state, {payload}) => {
            state.whichOne = payload;
        },
    }
});

export const selectCreateQuest = (state) => state.createQuest.add;
export const selectWindowStateOpen = (state) => state.createQuest.windowStateOpen;
export const selectWichOne = (state) => state.createQuest.whichOne;
export const selectFixState = (state) => state.createQuest.fixState;
export const selectOldFixQuest = (state) => state.createQuest.storeOldQuest;
export const selectActiveStep = (state) => state.createQuest.activeStep;
export const selectCreateQuestMain = (state) => state.createQuest.add.main;
export const selectCreateQuestSteps = (state) => state.createQuest.add.steps;
export const selectCreateQuestReset = (state) => state.createQuest.reset;

export const { mainAccept, addSteps, addPoints, setReset, deleteSteps, deletePoints, windowHandler, windowSwitcher, fixQuest, fixState, activeStepHandler, fixPointsHeight } = createQuestSlice.actions;

export default createQuestSlice.reducer;