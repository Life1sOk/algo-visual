import React from "react";

import { useSelector } from "react-redux";
import { selectCombinedActive, selectCombinedDone } from "../../../../App/slices/combined-areas.slice";

// import QuestDisplay from "../../../../Components/quest-display/quest-display.component";
import Quest from "../../../../Components/quest+/index";
import { CombinedQuestsContainer } from './combined.style';

const CombinedQuests = () => {
    const activeQuests = useSelector(selectCombinedActive);
    const doneQuests = useSelector(selectCombinedDone);

    return (
        <CombinedQuestsContainer>
            <h3>{`Count: ${doneQuests.length}`}</h3>
            {
                activeQuests.map((quest, index) => <Quest page='daily' key={index} currentQuest={quest} index={index}/>)
            }
        </CombinedQuestsContainer>
    )
}

export default CombinedQuests;