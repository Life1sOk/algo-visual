import React from "react";

import { useSelector } from "react-redux";
import { selectDisplaySection } from "../../../../App/slices/areas-slice";

import { PartsSectionContainer, PartsSectionDisplay } from './parts-section.style';
import AreaParts from "../../components/area-parts/area-parts.component";
import YearGoal from "../../components/year-goal/year-goal.component";
import CreateTodo from "../../components/create-todo/create-todo.component";

const PartsSection = () => {
    const currentSection = useSelector(selectDisplaySection);
    const { parts, mainColor, mainGoals } = currentSection;

    return (
        <PartsSectionContainer>
            <AreaParts parts={parts} />
            <PartsSectionDisplay>
                <CreateTodo />
                {
                    mainGoals.map(num => <YearGoal color={mainColor} key={num} title='Current Goal' />)
                }
            </PartsSectionDisplay>
        </PartsSectionContainer>
    )
}

export default PartsSection;