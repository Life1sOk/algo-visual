import React from "react";

import { YearGoalContainer, YearGoalTitle, YearGoalText } from './year-goal.style';

const YearGoal = ({ color, goal }) => {
    const { name, description } = goal;

    return (
        <YearGoalContainer color={color}>
            <YearGoalTitle color={color}>{name}</YearGoalTitle>
            <YearGoalText readOnly disabled defaultValue={description} />
            <div>Footer</div>
        </YearGoalContainer>
    )
}

export default YearGoal;