import React from "react";

import { GoalsSectionContainer } from './goals-section.style';
import YearGoal from "../../components/year-goal/year-goal.component";

const GoalsSection = () => {
    return (
        <GoalsSectionContainer>
            <YearGoal />
        </GoalsSectionContainer>
    )
}

export default GoalsSection;