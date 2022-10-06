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
            parts: {
                'Physical Health': [
                    {
                        id: 1,
                        name: 'Physical ',
                        description: '',
                    }
                ],
                'Emotion and Spiritual Health': [
                    {
                        id: 2,
                        name: 'Emotion and Spiritual',
                        description: '',
                    }
                ],
                'Financial Health': [
                    {
                        id: 3,
                        name: 'Financial',
                        description: '',
                    }
                ],
            },
        },
        {
            id: 1000,
            title: 'People',
            stateOpen: true,
            mainColor: 'rgb(255,204,229)',
            icon: people,
            previewImg: peopleImg,
            parts: {
                'Home People': [
                    {
                        id: 1,
                        name: 'Home',
                        description: '',
                    }
                ],
                'Work People': [
                    {
                        id: 2,
                        name: 'Work',
                        description: '',
                    }
                ],
                'Wider Community': [
                    {
                        id: 3,
                        name: 'Wider',
                        description: '',
                    }
                ],
            },
        },
        {
            id: 1500,
            title: 'Environment',
            stateOpen: true,
            mainColor: 'rgb(204,229,255)',
            icon: environment,
            previewImg: environmentImg,
            parts: {
                'Home Environment': [
                    {
                        id: 1,
                        name: 'Home E',
                        description: '',
                    }
                ],
                'Work Environment': [
                    {
                        id: 2,
                        name: 'Work E',
                        description: '',
                    }
                ],
                'Adventures': [
                    {
                        id: 3,
                        name: 'Advent',
                        description: '',
                    }
                ],
            },
        },
        {
            id: 2000,
            title: 'Growth',
            stateOpen: true,
            mainColor: 'rgb(255,229,204)',
            icon: growth,
            previewImg: growthImg,
            parts: {
                'Learning Growth': [
                    {
                        id: 1,
                        name: 'Learning',
                        description: '',
                    }
                ],
                'Career Growth': [
                    {
                        id: 2,
                        name: 'Career',
                        description: '',
                    }
                ],
                'Rest, Play and Creativity': [
                    {
                        id: 3,
                        name: 'RPaC',
                        description: '',
                    }
                ],
            },
        },
    ],
    displaySection: {
        id: 500,
        title: 'Health',
        stateOpen: true,
        mainColor: 'rgb(204,255,229)',
        icon: health,
        previewImg: healthImg,
        parts: {
            'Physical Health': [
                {
                    id: 1,
                    name: 'Physical ',
                    description: '',
                }
            ],
            'Emotion and Spiritual Health': [
                {
                    id: 2,
                    name: 'Emotion and Spiritual',
                    description: '',
                }
            ],
            'Financial Health': [
                {
                    id: 3,
                    name: 'Financial',
                    description: '',
                }
            ],
        },
    }
}