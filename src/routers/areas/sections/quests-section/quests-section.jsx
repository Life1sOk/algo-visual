import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { windowHandler } from "../../../../App/slices/create-quest.slice";
import { selectDisplaySectionTitle } from "../../../../App/slices/areas-slice";
import { selectCombinedAll } from "../../../../App/slices/combined-areas.slice";

// Global style
import { BlockLayout } from "../../../../Global-style/layouts";

import { QuestsSectionDisplay } from './quests-section.style';
import QuestWindow from "../../components/quest-window+/index";
import BlockHat from "../../../../Components/block-hat/block-hat.component";
import Quest from "../../../../Components/quest+/index";

const QuestsSection = () => {
    const dispatch = useDispatch();
    const title = useSelector(selectDisplaySectionTitle);
    const allQuests = useSelector(selectCombinedAll);
    const filteredQuests = allQuests?.filter(quest => quest.title === title);

    const openWindowHandler = () => dispatch(windowHandler(true));

    return (
        <>
        <QuestWindow title={title}/>
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