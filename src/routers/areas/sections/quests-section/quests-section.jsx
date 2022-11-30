import React, { useState } from "react";

import { useSelector } from "react-redux";
import { selectDisplaySection } from "../../../../App/slices/areas-slice";

// Global style
import { BlockLayout } from "../../../../Global-style/layouts";
import BlackBoxWindow from "../../../../Components/black-box/black-box.component";

import { QuestsSectionDisplay } from './quests-section.style';
import QuestWindow from "../../components/quest-window+/index";
import BlockHat from "../../../../Components/block-hat/block-hat.component";
import Quest from "../../../../Components/quest+/index";

const QuestsSection = () => {
    const currentSection = useSelector(selectDisplaySection);
    const { quests, mainColor, title, id } = currentSection;
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
                    quests?.map((quest, index) => <Quest page='areas' key={index} id={quest.id} title={title} data={quest.quest} questId={index + 1} />)
                }
            </QuestsSectionDisplay>
        </BlockLayout>
        </>
    )
}

export default QuestsSection;