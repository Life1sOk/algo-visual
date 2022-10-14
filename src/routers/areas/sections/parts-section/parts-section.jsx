import React, { useState, useEffect } from "react";

import { useSelector } from "react-redux";
import { selectDisplaySection } from "../../../../App/slices/areas-slice";
import { setUsersDatasAreas } from "../../../../utils/firebase/firebase";

import { PartsSectionContainer, PartsSectionDisplay } from './parts-section.style';
import AreaParts from "../../components/area-parts/area-parts.component";
import YearGoal from "../../components/year-goal/year-goal.component";
import CreateTodo from "../../components/create-todo/create-todo.component";

const PartsSection = ({ uid }) => {
    const currentSection = useSelector(selectDisplaySection);
    const { parts, mainColor, title } = currentSection;
    const [currentPart, setCurrentPart] = useState('');

    useEffect(() => {
        setCurrentPart(Object.keys(parts)[0]);
    }, [title]);

    const setUsersDatasAreasHandler = async () => {
        const currentTitle = title.toLowerCase();
        await setUsersDatasAreas(uid, currentTitle, currentSection);
    }

    return (
        <PartsSectionContainer>
            <AreaParts parts={parts} setCurrentPart={setCurrentPart} />
            <PartsSectionDisplay>
                <CreateTodo currentPart={currentPart} sectionTitle={title} setUsersDatasAreasHandler={setUsersDatasAreasHandler} />
                {
                    parts[currentPart]?.map(goal => <YearGoal color={mainColor} key={goal.id} goal={goal} currentPart={currentPart} sectionTitle={title} setUsersDatasAreasHandler={setUsersDatasAreasHandler} />)
                }
            </PartsSectionDisplay>
        </PartsSectionContainer>
    )
}

export default PartsSection;