import React, { useState, useEffect } from "react";

import { useSelector } from "react-redux";
import { selectDisplaySection } from "../../../../App/slices/areas-slice";

import { PartsSectionContainer, PartsSectionDisplay } from './parts-section.style';
import AreaParts from "../../components/area-parts/area-parts.component";
import YearGoal from "../../components/year-goal/year-goal.component";
import CreateTodo from "../../components/create-todo/create-todo.component";

const PartsSection = () => {
    const currentSection = useSelector(selectDisplaySection);
    const { parts, mainColor } = currentSection;
    const [currentPart, setCurrentPart] = useState('');

    useEffect(() => {
        setCurrentPart(Object.keys(parts)[0])
    }, [parts])

    return (
        <PartsSectionContainer>
            <AreaParts parts={parts} setCurrentPart={setCurrentPart} />
            <PartsSectionDisplay>
                <CreateTodo />
                {parts[currentPart] &&
                    parts[currentPart].map(goal => <YearGoal color={mainColor} key={goal.id} goal={goal} />)
                }
            </PartsSectionDisplay>
        </PartsSectionContainer>
    )
}

export default PartsSection;