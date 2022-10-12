export const initialAreas = {
    status: 'reload',
    sections: {},
    displaySection: {
        id: 0,
        title: '',
        stateOpen: false,
        mainColor: '',
        icon: '',
        previewImg: '',
        parts: {},
    },
}

export const initialPlan = {
    status: null,
    error: null,
    dailyPlan: [],
    fixPlan: [],
    blankQuest: {
        questName: '',
        description: ''
    }
}