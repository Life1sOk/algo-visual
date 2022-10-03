import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { getUsersDocsDaily } from '../../utils/firebase/firebase';

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

const initialState = {
    status: null,
    error: null,
    dailyPlan: [],
    fixPlan: [],
    blankQuest: {
        questName: '',
        description: ''
    }
}

export const dailySlice = createSlice({
    name: 'daily',
    initialState,
    reducers: {
        accept: (state, { payload }) => {
            state.fixPlan = state.fixPlan.map(quest => {
                if (quest.id === payload.id) {
                    return quest = { ...payload };
                }
                return quest;
            })
            state.dailyPlan = state.fixPlan;

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

            state.fixPlan.push({ id: lastId + 1, ...state.blankQuest })
        },
        remove: (state, { payload }) => {
            state.fixPlan = state.fixPlan.filter(quest => quest.id !== payload);
            state.tomorrowPlan = state.fixPlan;
        },
        drainDaily: (state) => {
            state.fixPlan = state.dailyPlan;
        }
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