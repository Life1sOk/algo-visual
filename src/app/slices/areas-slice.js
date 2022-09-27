import { createSlice } from "@reduxjs/toolkit";

import health from '../../Routers/areas/assets/health.png';
import people from '../../Routers/areas/assets/people.png';
import environment from '../../Routers/areas/assets/environment.png';
import growth from '../../Routers/areas/assets/growth.png';

const initialAreas = [
    {
        id: 500,
        title: 'Health',
        mainColor: 'rgb(204,255,229)',
        icon: health,
        parts: ['Physical Health', 'Emotion and Spiritual Health', 'Financial Health'],
    },
    {
        id: 1000,
        title: 'People',
        mainColor: 'rgb(255,204,229)',
        icon: people,
        parts: ['Home People', 'Work People', 'Wider Community'],
    },
    {
        id: 1500,
        title: 'Environment',
        mainColor: 'rgb(204,229,255)',
        icon: environment,
        parts: ['Home Environment', 'Work Environment', 'Adventures'],
    },
    {
        id: 2000,
        title: 'Growth',
        mainColor: 'rgb(255,229,204)',
        icon: growth,
        parts: ['Learning', 'Career', 'Rest, Play and Creativity'],
    },
];

export const areasSlice = createSlice({
    name: 'areas',
    initialState: initialAreas,
    reducers: {

    }
});

export const selectAreas = (state) => state.areas;

export default areasSlice.reducer;