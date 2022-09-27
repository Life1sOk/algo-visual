import { configureStore } from "@reduxjs/toolkit";
import userReducer from './slices/user.slice';
import tomorrowReducer from './slices/tomorrow-red.slice';
import areasReducer from './slices/areas-slice';

const store = configureStore({
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                // Ignore these action types
                ignoredActions: ['user/signIn'],
                // Ignore these field paths in all actions
                ignoredActionPaths: [],
                // Ignore these paths in the state
                ignoredPaths: ['user.currentUser'],
            },
        }),

    reducer: {
        user: userReducer,
        tomorrow: tomorrowReducer,
        areas: areasReducer,
    }
})

export default store;