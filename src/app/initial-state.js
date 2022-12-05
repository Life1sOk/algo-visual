const sectionStatistic = {
    statistic: {
        parts: 0,
        quests: {
            total: 0,
            active: 0,
            finished: 0,
            expired: 0,
        },
    },
}

const partEnvironment = {
    parts: {
        allParts: [
            {
                title: 'Adventures',
                description: 'These could be places where you like to work, meet or spend your free time and whatever you may need for that place.',
                color: 'rgb(52,120,140)',
                totalQuests: 0,
            },
            {
                title: 'Home Environment',
                description: 'Everything you need to create your dream home.',
                color: 'rgb(192,192,192)',
                totalQuests: 0,
            },
            {
                title: 'Work Environment',
                description: 'There is a place where you can focus on your work and be as productive and successful as possible.',
                color: 'rgb(0,128,255)',
                totalQuests: 0,
            },
        ],
        circle: {
            labels: ['Adventures', 'Home Environment', 'Work Environment'],
            datasets: [{
                label: 'My First Dataset',
                data: [0,0,0],
                backgroundColor: ['rgb(52,120,140)', 'rgb(192,192,192)', 'rgb(0,128,255)'],
                hoverOffset: 0
            }]
        }
    },
};

const partGrowth = {
    parts: {
        allParts: [
            {
                title: 'Career Growth',
                description: 'Career growth is the journey towards your big-picture career vision. It’s the way you move from your first job out of college to eventually leading your own team.',
                color: 'rgb(255,255,102)',
                totalQuests: 0,
            },
            {
                title: 'Learning Growth',
                description: 'Every day we must be better than yesterday. To do this, we need to constantly develop and master new skills.',
                color: 'rgb(102,102,255)',
                totalQuests: 0,
            },
            {
                title: 'Hobby Growth',
                description: 'Even if the hobby is our recreation, we can grow in this particular area and perhaps turn it into a career in the future.',
                color: 'rgb(255,102,255)',
                totalQuests: 0,
            },
        ],
        circle: {
            labels: ['Career Growth', 'Learning Growth', 'Hobby Growth'],
            datasets: [{
                label: 'My First Dataset',
                data: [0,0,0],
                backgroundColor: ['rgb(255,255,102)', 'rgb(102,102,255)', 'rgb(255,102,255)'],
                hoverOffset: 0
            }]
        }
    },
};

const partHealth = {
    parts: {
        allParts: [
            {
                title: 'Emotion and Spiritual Health',
                description: 'Be mentally strong, confident, calm, and a good person.',
                color: 'rgb(255,102,178)',
                totalQuests: 0,
            },
            {
                title: 'Financial Health',
                description: "The dynamic relationship of one's financial and economic resources as they are applied to or impact the state of physical, mental and social well-being.",
                color: 'rgb(255,178,102)',
                totalQuests: 0,
            },
            {
                title: 'Physical Health',
                description: 'Physical health is the well-being of the body and the proper functioning of the organism of individuals. Being able to live comfortably to do the things that you want to do.',
                color: 'rgb(102,255,102)',
                totalQuests: 0,
            },
        ],
        circle: {
            labels: ['Emotion and Spiritual Health', 'Financial Health', 'Physical Health'],
            datasets: [{
                label: 'My First Dataset',
                data: [0,0,0],
                backgroundColor: ['rgb(255,102,178)', 'rgb(255,178,102)', 'rgb(102,255,102)'],
                hoverOffset: 0
            }]
        }
    },
};

const partPeople = {
    parts: {
        allParts: [
            {
                title: 'Home People',
                description: 'Your connection to family and people around you at home.',
                color: 'rgb(153, 255,255)',
                totalQuests: 0,
            },
            {
                title: 'Wider Community',
                description: "People around you outside of your home and work. Friends, perhaps large communities, and so on.",
                color: 'rgb(255,215,0)',
                totalQuests: 0,
            },
            {
                title: 'Work People',
                description: 'The people you have at work and building working relationships.',
                color: 'rgb(255,102,102)',
                totalQuests: 0,
            },
        ],
        circle: {
            labels: ['Home People', 'Wider Community','Work People'],
            datasets: [{
                label: 'My First Dataset',
                data: [0,0,0],
                backgroundColor: ['rgb(153, 255,255)', 'rgb(255,215,0)', 'rgb(255,102,102)'],
                hoverOffset: 0
            }]
        }
    },
};

export const initialAreas = {
    status: 'reload',
    partStatus: '',
    error: null,
    sections: {
        Environment: {
            title: 'Environment',
            id: 1500,
            ...sectionStatistic,
            ...partEnvironment,
        },
        Growth: {
            title: 'Growth',
            id: 2000,
            ...sectionStatistic,
            ...partGrowth,
        },
        Health: {
            title: 'Health',
            id: 500,
            ...sectionStatistic,
            ...partHealth,
        },
        People: {
            title: 'People',
            id: 1000,
            ...sectionStatistic,
            ...partPeople,
        },
    },
    partToAdd: {
        title: '',
        description: '',
        color: '',
        totalQuests: 0,
    },
    displaySection: {
        title: 'Environment',
        id: 1500,
        ...sectionStatistic,
        ...partEnvironment,
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