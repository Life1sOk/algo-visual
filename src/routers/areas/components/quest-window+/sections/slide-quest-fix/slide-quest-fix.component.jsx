import React from "react";

import { useSelector } from "react-redux";
import { selectDisplaySectionTitle } from "../../../../../../App/slices/areas-slice";
import { selectCombinedActive } from "../../../../../../App/slices/combined-areas.slice";

import QuestFix from "../quest-fix/quest-fix.component";

import {SlideQuestFixContainer} from './slide-quest-fix.style';

const SlideQuestFix = () => {
    const title = useSelector(selectDisplaySectionTitle);

    const allQuests = useSelector(selectCombinedActive);
    const filteredQuests = allQuests?.filter(quest => quest.title === title);

    return(
        <SlideQuestFixContainer>
            {
                filteredQuests.map((quest, index) => <QuestFix key={index} data={quest} />)
            }
        </SlideQuestFixContainer>
    )
}

export default SlideQuestFix;