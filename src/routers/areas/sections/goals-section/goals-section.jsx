import React from "react";

import { useSelector } from "react-redux";
import { selectDisplaySection } from "../../../../App/slices/areas-slice";

import { GoalsSectionContainer } from './goals-section.style';
import YearGoal from "../../components/year-goal/year-goal.component";
import DescriptionHealth from "../../components/descriptions/description-health.component";
import DescriptionPeople from "../../components/descriptions/description-people.component";
import DescriptionEnvironment from "../../components/descriptions/description-environment.component";
import DescriptionGrowth from "../../components/descriptions/description-growth.component";

const GoalsSection = () => {
    const currentSection = useSelector(selectDisplaySection);
    const { title, mainColor, parts } = currentSection;

    return (
        <GoalsSectionContainer>
            <YearGoal color={mainColor} title={title} />
            {
                title === 'Health' ? <DescriptionHealth /> :
                    title === 'People' ? <DescriptionPeople /> :
                        title === 'Environment' ? <DescriptionEnvironment /> :
                            title === 'Growth' ? <DescriptionGrowth /> :
                                null
            }
        </GoalsSectionContainer>
    )
}

export default GoalsSection;