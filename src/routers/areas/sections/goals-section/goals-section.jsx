import React from "react";

import { useSelector } from "react-redux";
import { selectDisplaySection } from "../../../../App/slices/areas-slice";

import { GoalsSectionContainer } from './goals-section.style';
import YearGoal from "../../components/year-goal/year-goal.component";

const GoalsSection = () => {
    const currentSection = useSelector(selectDisplaySection);
    const { title, mainColor, parts } = currentSection;

    console.log(currentSection)

    return (
        <GoalsSectionContainer>
            <YearGoal color={mainColor} title={title} />
        </GoalsSectionContainer>
    )
}

export default GoalsSection;