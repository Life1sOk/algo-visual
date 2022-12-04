const section = {
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
}

export const initialAreas = {
    status: 'reload',
    partStatus: '',
    error: null,
    sections: {
        Environment: {
            title: 'Environment',
            id: 1500,
            ...section
        },
        Growth: {
            title: 'Growth',
            id: 2000,
            ...section
        },
        Health: {
            title: 'Health',
            id: 500,
            ...section
        },
        People: {
            title: 'People',
            id: 1000,
            ...section
        },
    },
    partToAdd: {
        title: '',
        description: '',
        color: '',
        totalQuests: 0,
    },
    displaySection: {
        title: 'Health',
        id: 500,
        ...section
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