import React from "react";

import { YearGoalContainer, YearGoalTitle } from './year-goal.style';

const YearGoal = ({ color, goal }) => {
    const { name, description } = goal;

    return (
        <YearGoalContainer color={color}>
            <YearGoalTitle color={color}>{name}</YearGoalTitle>
        </YearGoalContainer>
    )
}

export default YearGoal;