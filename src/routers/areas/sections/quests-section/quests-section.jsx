import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { windowHandler } from "../../../../App/slices/create-quest.slice";
import { selectDisplaySectionTitle } from "../../../../App/slices/areas-slice";
import { selectCombinedActive, selectCombinedDone, selectCombinedExpired } from "../../../../App/slices/combined-areas.slice";

// Global style
import { BlockLayout } from "../../../../Global-style/layouts";

import { QuestsSectionDisplay } from './quests-section.style';
import QuestWindow from "../../components/quest-window+/index";
import BlockHat from "../../../../Components/block-hat/block-hat.component";
import Quest from "../../../../Components/quest+/index";
import QuestMenu from "../../components/quest-menu/quest-menu.component";

const QuestsSection = () => {
    const [type, setType] = useState([]);

    const dispatch = useDispatch();
    const title = useSelector(selectDisplaySectionTitle);

    const activeQuests = useSelector(selectCombinedActive);
    const filteredActiveQuests = activeQuests?.filter(quest => quest.title === title);

    const doneQuests = useSelector(selectCombinedDone);
    const filteredDoneQuests = doneQuests?.filter(quest => quest.title === title);

    const expiredQuests = useSelector(selectCombinedExpired);
    const filteredExpiredQuests = expiredQuests?.filter(quest => quest.title === title);

    const openWindowHandler = () => dispatch(windowHandler(true));


    const changeTypeHandler = (type) => {
        if(type === 'active') return setType(filteredActiveQuests);
        if(type === 'done') return setType(filteredDoneQuests);
        if(type === 'expired') return setType(filteredExpiredQuests);
    }

    useEffect(() => {
        setType(filteredActiveQuests);
    }, [title]);

    return (
        <>
            <QuestWindow title={title}/>
            <BlockLayout>
                <BlockHat title='Quests:' setting='Add another quest' handler={openWindowHandler}>
                    <QuestMenu action={changeTypeHandler}/>
                </BlockHat>
                <QuestsSectionDisplay>
                    {
                        type?.map((quest, index) => <Quest page='areas' key={index} currentQuest={quest} index={index}/>)
                    }
                </QuestsSectionDisplay>
            </BlockLayout>
        </>
    )
}

export default QuestsSection;