import React from "react";

import { useSelector } from "react-redux";
import { selectDisplaySectionTitle } from "../../../../../App/slices/areas-slice";
import { selectCombinedAll } from "../../../../../App/slices/combined-areas.slice";
import QuestFix from "../quest-fix/quest-fix.component";

import {SlideQuestFixContainer} from './slide-quest-fix.style';

const SlideQuestFix = () => {
    const title = useSelector(selectDisplaySectionTitle);
    const allQuests = useSelector(selectCombinedAll);
    const filteredQuests = allQuests?.filter(quest => quest.title === title);

    const check = [1,2,3,4,5,6,7]

    return(
        <SlideQuestFixContainer>
            {
                filteredQuests.map((quest, index) => <QuestFix key={index} data={quest.quest}/>)
            }
        </SlideQuestFixContainer>
    )
}

export default SlideQuestFix;