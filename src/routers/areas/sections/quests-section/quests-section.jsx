import React, { useState, useEffect } from "react";

import { useDispatch } from "react-redux";
import { windowHandler } from "../../../../App/slices/create-quest.slice";

// Global style
import { BlockLayout } from "../../../../Global-style/layouts";
// ---------------- //

import { QuestsSectionDisplay } from './quests-section.style';
import QuestWindow from "../../components/quest-window+/index";
import BlockHat from "../../../../Components/block-hat/block-hat.component";
import Quest from "../../../../Components/quest+/index";
import QuestMenu from "../../components/quest-menu/quest-menu.component";

const QuestsSection = ({ displayTitle, fActive, fDone, fExpired}) => {
    const [type, setType] = useState([]);

    const dispatch = useDispatch();

    const openWindowHandler = () => dispatch(windowHandler(true));

    const changeTypeHandler = (type) => {
        if(type === 'active') return setType(fActive);
        if(type === 'done') return setType(fDone);
        if(type === 'expired') return setType(fExpired);
    }

    useEffect(() => {
        setType(fActive);
    }, [displayTitle, fActive]);

    return (
        <>
            <QuestWindow title={displayTitle}/>
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