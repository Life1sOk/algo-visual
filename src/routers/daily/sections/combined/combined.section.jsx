import React from "react";

import { useSelector } from "react-redux";
import { selectCombinedAll } from "../../../../App/slices/combined-areas.slice";

// import QuestDisplay from "../../../../Components/quest-display/quest-display.component";
import Quest from "../../../../Components/quest/index";
import { CombinedQuestsContainer } from './combined.style';

const CombinedQuests = () => {
    const allQuests = useSelector(selectCombinedAll);

    return (
        <CombinedQuestsContainer>
            {
                allQuests.map((quest, index) => <Quest page='daily' key={index} id={quest.id} title={quest.title} data={quest.quest} questId={index + 1} />)
            }
        </CombinedQuestsContainer>
    )
}

export default CombinedQuests;