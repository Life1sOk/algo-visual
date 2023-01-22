const partEnvironment = {
    parts: [
        {
            title: 'Adventures E.',
            description: 'These could be places where you like to work, meet or spend your free time and whatever you may need for that place.',
            color: 'rgb(52,120,140)',
            totalQuests: 0,
        },
        {
            title: 'Home E.',
            description: 'Everything you need to create your dream home.', 
            color: 'rgb(192,192,192)',
            totalQuests: 0,
        },
        {
            title: 'Work E.',
            description: 'There is a place where you can focus on your work and be as productive and successful as possible.',
            color: 'rgb(0,128,255)',
            totalQuests: 0,
        },
    ],
};

const partGrowth = {
    parts: [
        {
            title: 'Career G.' ,
            description: 'Career growth is the journey towards your big-picture career vision. It’s the way you move from your first job out of college to eventually leading your own team.',
            color: 'rgb(255,255,102)',
            totalQuests: 0,
        },
        {
            title: 'Learning G.',
            description: 'Every day we must be better than yesterday. To do this, we need to constantly develop and master new skills.',
            color: 'rgb(102,102,255)',
            totalQuests: 0,
        },
        {
            title: 'Hobby G.',
            description: 'Even if the hobby is our recreation, we can grow in this particular area and perhaps turn it into a career in the future.',
            color: 'rgb(255,102,255)',
            totalQuests: 0,
        },
    ],
};

const partHealth = {
    parts: [
        {
            title: 'Mental H.',
            description: 'Be mentally strong, confident, calm, and a good person.',
            color: 'rgb(255,102,178)',
            totalQuests: 0,
        },
        {
            title: 'Financial H.',
            description: "The dynamic relationship of one's financial and economic resources as they are applied to or impact the state of physical, mental and social well-being.",
            color: 'rgb(255,178,102)',
            totalQuests: 0,
        },
        {
            title: 'Physical H.',
            description: 'Physical health is the well-being of the body and the proper functioning of the organism of individuals.',
            color: 'rgb(102,255,102)',
            totalQuests: 0,
        },
    ],
};

const partPeople = {
    parts: [
        {
            title: 'Home P.',
            description: 'Your connection to family and people around you at home.',
            color: 'rgb(153, 255,255)',
            totalQuests: 0,
        },
        {
            title: 'Wider Com.',
            description: "People around you outside of your home and work. Friends, perhaps large communities, and so on.",
            color: 'rgb(255,215,0)',
            totalQuests: 0,
        },
        {
            title: 'Work P.',
            description: 'The people you have at work and building working relationships.',
            color: 'rgb(255,102,102)',
            totalQuests: 0,
        },
    ],
};

export const initialAreas = {
    status: 'reload',
    partWindowOpen: false,
    error: null,
    sections: {
        Environment: {
            title: 'Environment',
            id: 1500,
            ...partEnvironment,
        },
        Growth: {
            title: 'Growth',
            id: 2000,
            ...partGrowth,
        },
        Health: {
            title: 'Health',
            id: 500,
            ...partHealth,
        },
        People: {
            title: 'People',
            id: 1000,
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
        ...partEnvironment,
    },
};

export const initialPlan = {
    status: null,
    error: null,
    currentDay: {},
    nextDay: {},
    activePlanDay: {},
    calendarDays: [],
    mainPlan: [],
    fixPlan: [],
    secondaryPlan: [],
    secondaryFixPlan: [],
    blankQuest: {
        questName: '',
        description: '',
        part: 'no',
        area: 'no',
        status: false,
    },
    currentQuest: null,
};