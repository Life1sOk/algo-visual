import { configureStore } from "@reduxjs/toolkit";
import userReducer from './slices/user.slice';
import dailyReducer from './slices/daily.slice';
import areasReducer from './slices/areas-slice';
import authReducer from './slices/auth.slice';
import createQuestReducer from "./slices/create-quest.slice";
import questSlidesReducer from "./slices/quest-slides";
import combinedAreasReducer from "./slices/combined-areas.slice";
import linksReducer from './slices/links-slice';

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
        auth: authReducer,
        user: userReducer,
        daily: dailyReducer,
        areas: areasReducer,
        createQuest: createQuestReducer,
        questSlide: questSlidesReducer,
        combined: combinedAreasReducer,
        links: linksReducer,
    }
})

export default store;