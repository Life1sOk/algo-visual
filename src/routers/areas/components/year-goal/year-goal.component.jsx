import React from "react";

import { YearGoalContainer, YearGoalTitle } from './year-goal.style';

const YearGoal = ({ color, title }) => {
    return (
        <YearGoalContainer color={color}>
            <YearGoalTitle color={color}>{title}</YearGoalTitle>
            <div></div>
        </YearGoalContainer>
    )
}

export default YearGoal;