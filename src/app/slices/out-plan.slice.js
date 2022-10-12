import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { getUsersDocsOutPlan } from '../../utils/firebase/firebase';
import { initialPlan } from "../initial-state";

export const getOutInitialData = createAsyncThunk(
    'outPlan/getInitialData',
    async (uid, { rejectWithValue }) => {
        try {
            const response = await getUsersDocsOutPlan(uid);

            return response;
        } catch (error) {
            return rejectWithValue(error.messege);
        }
    }
)

export const outPlanSlice = createSlice({
    name: 'outPlan',
    initialState: initialPlan,
    reducers: {
        acceptOut: (state, { payload }) => {
            state.fixOutOfPlan = state.fixOutOfPlan.map(quest => {
                if (quest.id === payload.id) {
                    quest = { ...payload };
                }
                return quest;
            });

            if (state.outOfPlan.length < state.fixOutOfPlan.length) {
                state.outOfPlan.push(payload);
            }
        },
        addQuestOut: (state) => {
            let lastId = state.fixOutOfPlan.length;
            const checkObject = state.fixOutOfPlan[lastId - 1]?.questName;

            if (state.fixOutOfPlan[0] && checkObject.length < 3) {
                alert('u already have to add');
                return;
            }

            state.fixOutOfPlan.push({ id: lastId + 1, ...state.blankQuest })
        },
        removeOut: (state, { payload }) => {
            state.fixOutOfPlan = state.fixOutOfPlan.filter(quest => quest.id !== payload);
            state.outOfPlan = state.fixOutOfPlan;
        },
        drainOutDaily: (state) => {
            const drain = [...state.outOfPlan, ...state.fixOutOfPlan];
            const newId = drain.map(quest => {
                return { ...quest, id: drain.indexOf(quest) };
            })
            state.fixOutOfPlan = newId;
        }
    },
    extraReducers: {
        [getOutInitialData.pending]: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [getOutInitialData.fulfilled]: (state, { payload }) => {
            state.status = 'resolved';
            state.outOfPlan = payload;
        },
        [getOutInitialData.rejected]: (state, { payload }) => {
            state.status = 'rejected';
            state.error = payload;
        }
    }
});

export const selectOutOfPlan = (state) => state.outPlan.outOfPlan;
export const selectFixOutOfPlan = (state) => state.outPlan.fixOutOfPlan;
export const selectOutStatus = (state) => state.outPlan.status;

export const { remove, accept, addQuest, removeOut, acceptOut, addQuestOut, drainOutDaily } = outPlanSlice.actions;

export default outPlanSlice.reducer;