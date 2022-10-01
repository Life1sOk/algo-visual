import health from '../Routers/areas/assets/health.png';
import people from '../Routers/areas/assets/people.png';
import environment from '../Routers/areas/assets/environment.png';
import growth from '../Routers/areas/assets/growth.png';

export const initialAreas = {
    sections: [
        {
            id: 500,
            title: 'Health',
            mainColor: 'rgb(204,255,229)',
            icon: health,
            parts: ['Physical Health', 'Emotion and Spiritual Health', 'Financial Health'],
            mainGoals: [
                {
                    currentGoal: '',
                    id: '',
                    tier: 1,
                    needToDo: [],
                },
            ]
        },
        {
            id: 1000,
            title: 'People',
            mainColor: 'rgb(255,204,229)',
            icon: people,
            parts: ['Home People', 'Work People', 'Wider Community'],
            mainGoals: [
                {
                    currentGoal: '',
                    id: '',
                    tier: 1,
                    needToDo: [],
                },
            ]
        },
        {
            id: 1500,
            title: 'Environment',
            mainColor: 'rgb(204,229,255)',
            icon: environment,
            parts: ['Home Environment', 'Work Environment', 'Adventures'],
            mainGoals: [
                {
                    currentGoal: '',
                    id: '',
                    tier: 1,
                    needToDo: [],
                },
            ]
        },
        {
            id: 2000,
            title: 'Growth',
            mainColor: 'rgb(255,229,204)',
            icon: growth,
            parts: ['Learning', 'Career', 'Rest, Play and Creativity'],
            mainGoals: [
                {
                    currentGoal: '',
                    id: '',
                    tier: 1,
                    needToDo: [],
                },
            ]
        },
    ],
    displaySection: {
        id: 500,
        title: 'Health',
        mainColor: 'rgb(204,255,229)',
        icon: health,
        parts: ['Physical Health', 'Emotion and Spiritual Health', 'Financial Health'],
        mainGoals: [
            {
                currentGoal: '',
                id: '',
                tier: 1,
                needToDo: [],
            },
        ]
    }
}

export const initialAuthState = {
    loggedIn: false,
    userEmail: null,
    userUid: null
}

export const initialCurrentUserState = {

}