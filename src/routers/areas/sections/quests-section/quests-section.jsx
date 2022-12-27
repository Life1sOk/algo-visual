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
    const [activeType, setActiveType] = useState('active');

    const dispatch = useDispatch();

    const openWindowHandler = () => {
        setActiveType('active');
        dispatch(windowHandler(true));
    };

    const changeTypeHandler = (type) => {
        if(type === 'active') {
            setActiveType(type);
            return setType(fActive);
        }
        if(type === 'done') {
            setActiveType(type);
            return setType(fDone)
        };
        if(type === 'expired') {
            setActiveType(type)
            return setType(fExpired)
        };
    }

    useEffect(() => {
        setType(fActive);
    }, [displayTitle, fActive]);

    return (
        <>
            <QuestWindow title={displayTitle}/>
            <BlockLayout>
                <BlockHat title='Quests:' setting='Add another quest' handler={openWindowHandler}>
                    <QuestMenu type={activeType} action={changeTypeHandler}/>
                </BlockHat>
                <QuestsSectionDisplay activeType={activeType}>
                    {
                        type?.map((quest, index) => <Quest page='areas' key={index} currentQuest={quest} index={index} activeType={activeType}/>)
                    }
                </QuestsSectionDisplay>
            </BlockLayout>
        </>
    )
}

export default QuestsSection;