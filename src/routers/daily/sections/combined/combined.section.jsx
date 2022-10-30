import React from "react";

import { useSelector } from "react-redux";
import { selectCombinedAll } from "../../../../App/slices/combined-areas.slice";

import QuestDisplay from "../../../areas/components/quest-display/quest-display.component";
import { CombinedQuestsContainer } from './combined.style';

const CombinedQuests = () => {
    const allQuests = useSelector(selectCombinedAll);

    return (
        <CombinedQuestsContainer>
            {
                allQuests[0] &&
                allQuests.map(quest => <QuestDisplay key={quest.quest.id} title={quest.title} part={quest.part} data={quest.quest} />)
            }
        </CombinedQuestsContainer>
    )
}

export default CombinedQuests;