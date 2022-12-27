import React from "react";

import { useSelector } from "react-redux";
import { selectCombinedActive } from "../../../../App/slices/combined-areas.slice";

import Quest from "../../../../Components/quest+/index";
import { CombinedQuestsContainer } from './combined.style';

const CombinedQuests = () => {
    const activeQuests = useSelector(selectCombinedActive);

    return (
        <>
            <CombinedQuestsContainer>
                {
                    activeQuests?.map((quest, index) => <Quest page='daily' key={index} currentQuest={quest} index={index} activeType={'active'}/>)     
                }
            </CombinedQuestsContainer>
        </>
    )
}

export default CombinedQuests;