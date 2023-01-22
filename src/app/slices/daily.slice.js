import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { getUsersDocsDaily, getUsersDocsDailyCalendar, addUsersData, deleteUsersData, setUsersDatasDaily } from '../../utils/firebase/firebase';
import { initialPlan } from "../initial-state";

export const getDailyInitialData = createAsyncThunk(
    'daily/getDailyInitialData',
    async (data, rejectWithValue) => {
        const { uid, calendarDay} = data;

        try {
            const response = await getUsersDocsDaily(uid, calendarDay);
            return response;
        } catch (error) {
            return rejectWithValue(error.messege);
        }
    }
);

export const getDailyInitialDataCalendar = createAsyncThunk(
    'daily/getDailyInitialDataCalendar',
    async (data, rejectWithValue) => {
        const { uid, calendarDay } = data;

        try {
            const response = await getUsersDocsDailyCalendar(uid, calendarDay);
            return response;
        } catch (error) {
            return rejectWithValue(error.messege);
        }
    }
);

export const dailySlice = createSlice({
    name: 'daily',
    initialState: initialPlan,
    reducers: {
        accept: (state, { payload }) => {
            const { currentToDo, type } = payload;

            if(type === 'main') {
                state.fixPlan = state.fixPlan.map(quest => {
                    if (quest.id === currentToDo.id) {
                        return quest = { ...currentToDo };
                    }
                    return quest;
                });
            }

            if( type === 'secondary') {
                state.secondaryFixPlan = state.secondaryFixPlan.map(quest => {
                    if (quest.id === currentToDo.id) {
                        return quest = { ...currentToDo };
                    }
                    return quest;
                });
            }
        },
        addQuest: (state, { payload }) => {
            const { type, data } = payload;

            if(type === 'main') {
                let lastId = state.fixPlan.length;
                const checkObject = state.fixPlan[lastId - 1]?.questName;
    
                if (state.fixPlan[0] && checkObject.length < 3 && !payload) {
                    alert('u already have to add');
                    return;
                }
    
                if (data !== null) {
                    state.fixPlan.push({ ...data, id: lastId + 1 });
                    console.log({ ...data, id: lastId + 1 })
                    return;
                }
    
                state.fixPlan.push({ id: lastId + 1, ...state.blankQuest });
            };

            if(type === 'secondary') {
                let lastId = state.secondaryFixPlan.length;
                const checkObject = state.secondaryFixPlan[lastId - 1]?.questName;
    
                if (state.secondaryFixPlan[0] && checkObject.length < 3) {
                    alert('u already have to add');
                    return;
                }

                if (data == null) {
                    state.secondaryFixPlan.push({ ...data, id: lastId + 1 });
                    return;
                }
    
                state.secondaryFixPlan.push({ id: lastId + 1, ...state.blankQuest });
            };
        },
        remove: (state, { payload }) => {
            const { id, type } = payload;

            if(type === 'main') state.fixPlan = state.fixPlan.filter(quest => quest.id !== id);
            if(type === 'secondary') state.secondaryFixPlan = state.secondaryFixPlan.filter(quest => quest.id !== id);
        },
        changeStatus: (state, {payload}) => {
            const { id, status, uid, type } = payload;

            if(type === 'main') {
                const updateNew = state.mainPlan.map(toDo => {
                    if(toDo.id === id) {
                        // Server delete
                        deleteUsersData(uid, toDo, type);
                        // Server update
                        let updatedToDo = {...toDo, status};
                        addUsersData(uid, updatedToDo, type);
                        // Redux update
                        return updatedToDo;
                    }
                    return toDo;
                });
    
                state.mainPlan = updateNew.sort((a,b) => a.status - b.status)
            }

            if(type === 'secondary') {
                const updateNew = state.secondaryPlan.map(toDo => {
                    if(toDo.id === id) {
                        // Server delete
                        deleteUsersData(uid, toDo, type);
                        // Server update
                        let updatedToDo = {...toDo, status};
                        addUsersData(uid, updatedToDo, type);
                        // Redux update
                        return updatedToDo;
                    }
                    return toDo;
                });
    
                state.secondaryPlan = updateNew.sort((a,b) => a.status - b.status)
            }
        },
        drainDaily: (state, { payload }) => {
            const { type } = payload;

            if(type === 'main') {
                const drain = [...state.mainPlan, ...state.fixPlan];
                const newId = drain.map((quest, index) => {
                    return { ...quest, id: index };
                });
                state.fixPlan = newId;
            }

            if(type === 'secondary') {
                const drain = [...state.secondaryPlan, ...state.secondaryFixPlan];
                const newId = drain.map((quest, index) => {
                    return { ...quest, id: index };
                })
                state.secondaryFixPlan = newId;
            }
        },
        changeCurrentDay: (state, {payload}) => {
            state.currentDay = payload;
        },
        changeActivePlanDay: (state, {payload}) => {
            state.activePlanDay = payload;
        },
        changeNextDay: (state, {payload}) => {
            state.nextDay = payload;
        },
        addQuestsServer: (state, {payload}) => {
            const { type, uid } = payload;
            const { year, monthStr, number, month } = state.nextDay;

            const datas = {
                type,
                datas: type === 'main' ? state.fixPlan : state.secondaryFixPlan, 
                year, 
                month,
                monthStr,
                number
            };

            console.log(datas)

            setUsersDatasDaily(uid, datas);

            if(type === 'main') state.fixPlan = [];
            if(type === 'secondary') state.secondaryFixPlan = [];
        },
    },
    extraReducers: {
        [getDailyInitialData.pending]: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [getDailyInitialData.fulfilled]: (state, { payload }) => {
            state.status = 'resolved';
            state.mainPlan = payload?.main;
            state.secondaryPlan = payload?.secondary;
        },
        [getDailyInitialData.rejected]: (state, { payload }) => {
            state.status = 'rejected';
            state.error = payload;
        },
        [getDailyInitialDataCalendar.pending]: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [getDailyInitialDataCalendar.fulfilled]: (state, { payload }) => {
            state.status = 'resolved';
            state.calendarDays = payload?.days;
        },
        [getDailyInitialDataCalendar.rejected]: (state, { payload }) => {
            state.status = 'rejected';
            state.error = payload;
        }
    }
});

export const selectDaily = (state) => state.daily.mainPlan;
export const selectFixPlan = (state) => state.daily.fixPlan;
export const selectSecondaryPlan = (state) => state.daily.secondaryPlan;
export const selectSecondaryFixPlan = (state) => state.daily.secondaryFixPlan;
export const selectDailyState = (state) => state.daily.status;
export const selectCurrentDay = (state) => state.daily.currentDay;
export const selectActiveDay = (state) => state.daily.activePlanDay;
export const selectNextDay = (state) => state.daily.nextDay;
export const selectCalendarDays = (state) => state.daily.calendarDays;

export const { remove, accept, addQuest, drainDaily, changeStatus, changeCurrentDay, changeActivePlanDay, changeNextDay, addQuestsServer } = dailySlice.actions;

export default dailySlice.reducer;