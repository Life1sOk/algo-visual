export const initialAreas = {
    status: 'reload',
    error: null,
    sections: {},
    displaySection: {
        id: 0,
        title: '',
        stateOpen: false,
        mainColor: '',
        icon: '',
        previewImg: '',
        quests: [],
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

export const initialPlanOut = {
    status: null,
    error: null,
    outOfPlan: [],
    fixOutOfPlan: [],
    blankQuest: {
        questName: '',
        description: ''
    }
}