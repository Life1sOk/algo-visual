import React, { useState, useEffect } from "react";

import { useSelector } from "react-redux";
import { selectDisplaySection } from "../../../../App/slices/areas-slice";
import { setUsersDatasAreas } from "../../../../utils/firebase/firebase";
import { selectAuthUid } from "../../../../App/slices/auth.slice";

import { PartsSectionContainer, PartsSectionDisplay } from './parts-section.style';
import AreaParts from "../../components/area-parts/area-parts.component";
import PlanSection from "../plan-section/plan-section";
import QuestDisplay from "../../../../Components/quest-display/quest-display.component";

const PartsSection = () => {
    const uid = useSelector(selectAuthUid);
    const currentSection = useSelector(selectDisplaySection);
    const { parts, mainColor, title } = currentSection;
    const [currentPart, setCurrentPart] = useState('');

    useEffect(() => {
        setCurrentPart(Object.keys(parts)[0]);
    }, [title]);

    useEffect(() => {
        let section = title.toLowerCase();
        setUsersDatasAreas(uid, section, currentSection);
    }, [parts])

    return (
        <PartsSectionContainer>
            <AreaParts parts={parts} setCurrentPart={setCurrentPart} currentPart={currentPart} />
            <PlanSection title={title} part={currentPart} />
            <PartsSectionDisplay>
                {
                    parts[currentPart]?.map(part => <QuestDisplay key={part.id} title={title} part={currentPart} data={part} />)
                }
            </PartsSectionDisplay>
        </PartsSectionContainer>
    )
}

export default PartsSection;