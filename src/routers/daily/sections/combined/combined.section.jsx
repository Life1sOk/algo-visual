import React from "react";

import { useSelector } from "react-redux";
import { selectCombinedAll } from "../../../../App/slices/combined-areas.slice";

import QuestDisplay from "../../../../Components/quest-display/quest-display.component";
import { CombinedQuestsContainer } from './combined.style';

const CombinedQuests = () => {
    const allQuests = useSelector(selectCombinedAll);

    return (
        <CombinedQuestsContainer>
            {
                allQuests[0] &&
                allQuests.map((quest, index) => <QuestDisplay key={index} id={quest.id} title={quest.title} data={quest.quest} questId={index + 1} />)
            }
        </CombinedQuestsContainer>
    )
}

export default CombinedQuests;