import React from "react";

import { useSelector } from "react-redux";
import { selectDisplaySection } from "../../../../App/slices/areas-slice";

import { QuestsSectionContainer, QuestsSectionDisplay } from './quests-section.style';
import PlanSection from "../plan-section/plan-section";
import QuestDisplay from "../../../../Components/quest-display/quest-display.component";

const QuestsSection = () => {
    const currentSection = useSelector(selectDisplaySection);
    const { quests, mainColor, title, id } = currentSection;

    return (
        <QuestsSectionContainer>
            <PlanSection title={title} />
            <QuestsSectionDisplay>
                {
                    quests?.map((quest, index) => <QuestDisplay page='areas' key={index} id={quest.id} title={title} data={quest.quest} questId={index + 1} />)
                }
            </QuestsSectionDisplay>
        </QuestsSectionContainer>
    )
}

export default QuestsSection;