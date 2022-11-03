import React from "react";

import { useSelector } from "react-redux";
import { selectDisplaySection } from "../../../../App/slices/areas-slice";

import { PartsSectionContainer, PartsSectionDisplay } from './parts-section.style';
import PlanSection from "../plan-section/plan-section";
import QuestDisplay from "../../../../Components/quest-display/quest-display.component";

const PartsSection = () => {
    const currentSection = useSelector(selectDisplaySection);
    const { quests, mainColor, title, id } = currentSection;

    return (
        <PartsSectionContainer>
            <PlanSection title={title} />
            <PartsSectionDisplay>
                {
                    quests?.map((quest, index) => <QuestDisplay key={index} id={quest.id} title={title} data={quest.quest} questId={index + 1} />)
                }
            </PartsSectionDisplay>
        </PartsSectionContainer>
    )
}

export default PartsSection;