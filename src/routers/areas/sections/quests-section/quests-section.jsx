import React, { useState } from "react";

import { useSelector } from "react-redux";
import { selectDisplaySectionTitle } from "../../../../App/slices/areas-slice";
import { selectCombinedAll } from "../../../../App/slices/combined-areas.slice";

// Global style
import { BlockLayout } from "../../../../Global-style/layouts";
import BlackBoxWindow from "../../../../Components/black-box/black-box.component";

import { QuestsSectionDisplay } from './quests-section.style';
import QuestWindow from "../../components/quest-window+/index";
import BlockHat from "../../../../Components/block-hat/block-hat.component";
import Quest from "../../../../Components/quest+/index";

const QuestsSection = () => {
    const title = useSelector(selectDisplaySectionTitle);
    const allQuests = useSelector(selectCombinedAll);
    const filteredQuests = allQuests?.filter(quest => quest.title === title);
    
    const [window, setWindow] = useState(false);

    const openWindowHandler = () => setWindow(true);
    const closeWindowHandler = () => setWindow(false);

    return (
        <>
        {
            window && 
            <BlackBoxWindow handler={closeWindowHandler}>
                <QuestWindow title={title}/>
            </BlackBoxWindow>
        }
        <BlockLayout>
            <BlockHat title='Quests' setting='Add another quest' handler={openWindowHandler}/>
            <QuestsSectionDisplay>
                {
                    filteredQuests?.map((quest, index) => <Quest page='areas' key={index} id={quest.id} data={quest.quest} questId={index + 1} title={quest.title}/>)
                }
            </QuestsSectionDisplay>
        </BlockLayout>
        </>
    )
}

export default QuestsSection;