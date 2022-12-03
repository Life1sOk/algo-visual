export const initialAreas = {
    status: 'reload',
    partStatus: '',
    error: null,
    sections: {},
    partToAdd: {
        title: '',
        description: '',
        color: '',
        totalQuests: 0,
    },
    displaySection: {
        id: 0,
        title: '',
        stateOpen: false,
        mainColor: '',
        icon: '',
        previewImg: '',
        statistic: {
            parts: 0,
            quests: {
                total: 0,
                active: 0,
                finished: 0,
                expired: 0,
            },
        },
        parts: {
            allParts: [],
            circle: {
                labels: [],
                datasets: [{
                    label: 'My First Dataset',
                    data: [],
                    backgroundColor: [],
                    hoverOffset: 0
                }]
            }
        },
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