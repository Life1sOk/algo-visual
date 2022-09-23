// dailyPlan id: 50-100;

export const initialState = {
    outOfPlan: [],
    mainGoals: [
        {
            currentGoal: '',
            id: '',
            tier: 1,
            needToDo: [
                {
                    currentGoal: '',
                    id: '',
                    tier: 2,
                    needToDo: [
                        {
                            currentGoal: '',
                            id: '',
                            tier: 3,
                            needToDo: [],
                        },
                    ],
                },
            ],
        },
    ]
}