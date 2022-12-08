import React from "react";

import { useSelector } from "react-redux";
import { selectDisplaySectionTitle } from "../../../../../App/slices/areas-slice";
import { selectCombinedAll } from "../../../../../App/slices/combined-areas.slice";

import {} from './slide-quest-fix.style';

const SlideQuestFix = () => {
    const title = useSelector(selectDisplaySectionTitle);
    const allQuests = useSelector(selectCombinedAll);
    const filteredQuests = allQuests?.filter(quest => quest.title === title);

    console.log(filteredQuests)

    return(
        <div>
            {
                
            }
        </div>
    )
}

export default SlideQuestFix;