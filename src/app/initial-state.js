import health from '../Routers/areas/assets/health.png';
import people from '../Routers/areas/assets/people.png';
import environment from '../Routers/areas/assets/environment.png';
import growth from '../Routers/areas/assets/growth.png';

import healthImg from '../Routers/areas/assets/page-img/running.png';
import peopleImg from '../Routers/areas/assets/page-img/networking.png';
import environmentImg from '../Routers/areas/assets/page-img/environment.png';
import growthImg from '../Routers/areas/assets/page-img/growth.png';

export const initialAreas = {
    sections: [
        {
            id: 500,
            title: 'Health',
            stateOpen: true,
            mainColor: 'rgb(204,255,229)',
            icon: health,
            previewImg: healthImg,
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
            stateOpen: true,
            mainColor: 'rgb(255,204,229)',
            icon: people,
            previewImg: peopleImg,
            parts: ['Home People', 'Work People', 'Wider Community'],
            mainGoals: [
                {
                    currentGoal: '',
                    id: '',
                    tier: 1,
                    needToDo: [],
                },
                {
                    currentGoal: '',
                    id: '',
                    tier: 2,
                    needToDo: [],
                },
            ]
        },
        {
            id: 1500,
            title: 'Environment',
            stateOpen: true,
            mainColor: 'rgb(204,229,255)',
            icon: environment,
            previewImg: environmentImg,
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
            stateOpen: true,
            mainColor: 'rgb(255,229,204)',
            icon: growth,
            previewImg: growthImg,
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
        stateOpen: true,
        mainColor: 'rgb(204,255,229)',
        icon: health,
        previewImg: healthImg,
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