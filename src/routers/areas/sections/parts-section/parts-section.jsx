import React, { useState, useEffect } from "react";

import { useSelector } from "react-redux";
import { selectDisplaySection } from "../../../../App/slices/areas-slice";

import { PartsSectionContainer, PartsSectionDisplay } from './parts-section.style';
import AreaParts from "../../components/area-parts/area-parts.component";
import YearGoal from "../../components/year-goal/year-goal.component";
import CreateTodo from "../../components/create-todo/create-todo.component";

const PartsSection = () => {
    const currentSection = useSelector(selectDisplaySection);
    const { parts, mainColor, title } = currentSection;
    const [currentPart, setCurrentPart] = useState('');

    useEffect(() => {
        setCurrentPart(Object.keys(parts)[0])
    }, [title])

    return (
        <PartsSectionContainer>
            <AreaParts parts={parts} setCurrentPart={setCurrentPart} />
            <PartsSectionDisplay>
                <CreateTodo currentPart={currentPart} sectionTitle={title} />
                {
                    parts[currentPart]?.map(goal => <YearGoal color={mainColor} key={goal.id} goal={goal} />)
                }
            </PartsSectionDisplay>
        </PartsSectionContainer>
    )
}

export default PartsSection;