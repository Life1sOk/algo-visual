import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { getUsersDocsDaily, addUsersData, deleteUsersData } from '../../utils/firebase/firebase';
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
            const { currentToDo, type } = payload;

            state.fixPlan = state.fixPlan.map(quest => {
                if (quest.id === currentToDo.id) {
                    return quest = { ...currentToDo };
                }
                return quest;
            });
            
            // if (type === 'main' && state.mainPlan?.length < state.fixPlan.length) state.mainPlan.push(payload);
            // if (type === 'secondary' && state.secondaryPlan?.length < state.fixPlan.length) state.secondaryPlan.push(payload);
        },
        addQuest: (state, { payload }) => {
            let lastId = state.fixPlan.length;
            const checkObject = state.fixPlan[lastId - 1]?.questName;

            if (state.fixPlan[0] && checkObject.length < 3 && !payload) {
                alert('u already have to add');
                return;
            }

            if (payload) {
                state.fixPlan.push({ ...payload, id: lastId + 1 });
                return;
            }

            state.fixPlan.push({ id: lastId + 1, ...state.blankQuest });
        },
        remove: (state, { payload }) => {
            state.fixPlan = state.fixPlan.filter(quest => quest.id !== payload);
        },
        changeStatus: (state, {payload}) => {
            const { id, status, uid } = payload;

            const updateNew = state.mainPlan.map(toDo => {
                if(toDo.id === id) {
                    // Server delete
                    deleteUsersData(uid, toDo, 'daily');
                    // Server update
                    let updatedToDo = {...toDo, status};
                    addUsersData(uid, updatedToDo, 'daily');
                    // Redux update
                    return updatedToDo;
                }
                return toDo;
            });

            state.mainPlan = updateNew.sort((a,b) => a.status - b.status)
        },
        drainDaily: (state) => {
            const drain = [...state.mainPlan, ...state.fixPlan];
            const newId = drain.map((quest, index) => {
                return { ...quest, id: index };
            });
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
            state.mainPlan = payload.main;
            state.secondary = payload.secondary;
        },
        [getDailyInitialData.rejected]: (state, { payload }) => {
            state.status = 'rejected';
            state.error = payload;
        }
    }
});

export const selectDaily = (state) => state.daily.mainPlan;
export const selectFixPlan = (state) => state.daily.fixPlan;
export const selectDailyState = (state) => state.daily.status;

export const { remove, accept, addQuest, drainDaily, changeStatus } = dailySlice.actions;

export default dailySlice.reducer;