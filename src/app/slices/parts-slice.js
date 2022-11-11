import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: 'useEffect',
    toAdd: {
        title: '',
        description: '',
        color: '',
        totalQuests: 1,
    },
    allParts: [],
    circle: {
        labels: [
            'Physical Health'
        ],
        datasets: [{
            label: 'My First Dataset',
            data: [1],
            backgroundColor: [
                'rgba(255, 99, 132)',
            ],
            hoverOffset: 0
        }]
    }
}

export const partsSlice = createSlice({
    name: 'parts',
    initialState,
    reducers: {
        changeCurrentColor: (state, { payload }) => {
            state.toAdd.color = payload;
        },
        changeToAddData: (state, { payload }) => {
            const { title, description } = payload;
            state.toAdd.title = title;
            state.toAdd.description = description;
        },
        addToAll: (state) => {
            // Add to all parts array
            let newId = state.allParts.length;
            state.allParts.push({ ...state.toAdd, id: newId });
            // Add to circle data
            const { title, color, totalQuests } = state.toAdd;
            state.circle.labels.push(title);
            state.circle.datasets[0].data.push(totalQuests);
            state.circle.datasets[0].backgroundColor.push(color);
        }
    },
});

export const selectToAddPart = (state) => state.parts.toAdd;
export const selectToAddPartColor = (state) => state.parts.toAdd.color;
export const selectAllParts = (state) => state.parts.allParts;
export const selectCircle = (state) => state.parts.circle;

export const { changeCurrentColor, changeToAddData, addToAll } = partsSlice.actions;

export default partsSlice.reducer;