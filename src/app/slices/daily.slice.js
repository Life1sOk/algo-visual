import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { getUsersDocsDaily } from '../../utils/firebase/firebase';
import { initialPlan } from "../initial-state";

export const getDailyInitialData = createAsyncThunk(
    'daily/getDailyInitialData',
    async (uid, rejectWithValue) => {
        try {
            const response = await getUsersDocsDaily(uid);
            return response;
        } catch (error) {
            return rejectWithValue(error.messege);
        }
    }
)

export const dailySlice = createSlice({
    name: 'daily',
    initialState: initialPlan,
    reducers: {
        accept: (state, { payload }) => {
            state.fixPlan = state.fixPlan.map(quest => {
                if (quest.id === payload.id) {
                    return quest = { ...payload };
                }
                return quest;
            })

            if (state.dailyPlan.length < state.fixPlan.length) {
                state.dailyPlan.push(payload);
            }
        },
        addQuest: (state) => {
            let lastId = state.fixPlan.length;
            const checkObject = state.fixPlan[lastId - 1]?.questName;

            if (state.fixPlan[0] && checkObject.length < 3) {
                alert('u already have to add');
                return;
            }

            state.fixPlan.push({ id: lastId + 1, ...state.blankQuest });
        },
        remove: (state, { payload }) => {
            state.fixPlan = state.fixPlan.filter(quest => quest.id !== payload);
            state.tomorrowPlan = state.fixPlan;
        },
        drainDaily: (state) => {
            const drain = [...state.dailyPlan, ...state.fixPlan];
            const newId = drain.map(quest => {
                return { ...quest, id: drain.indexOf(quest) };
            })
            state.fixPlan = newId;
        },
    },
    extraReducers: {
        [getDailyInitialData.pending]: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [getDailyInitialData.fulfilled]: (state, { payload }) => {
            state.status = 'resolved';
            state.dailyPlan = payload;
        },
        [getDailyInitialData.rejected]: (state, { payload }) => {
            state.status = 'rejected';
            state.error = payload;
        }
    }
});

export const selectDaily = (state) => state.daily.dailyPlan;
export const selectFixPlan = (state) => state.daily.fixPlan;
export const selectDailyState = (state) => state.daily.status;

export const { remove, accept, addQuest, drainDaily } = dailySlice.actions;

export default dailySlice.reducer;