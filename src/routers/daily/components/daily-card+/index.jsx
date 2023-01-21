import React, { useState } from "react";

// Component Style //
import DailyStyle from './index.styled';

import AfdQuest from "./afd-quest/afd-quest.component";
import AddQuest from './add-quest/add-quest.component';
import Button from "../button/button.component";

const DailyCard = ({ title, color, quests, type, addDatasServer, drainDatas }) => {
    const [cardReady, setCardReady] = useState(false);
    const [questCount, setQuestCount] = useState(0);

    const changeCountHandler = (side) => {
        if (side === 'increase') return setQuestCount(questCount + 1);
        if (side === 'decrease') return setQuestCount(questCount - 1);
    }

    const addDatasHandler = () => {
        if (questCount === quests.length && quests.length > 0) {
            setCardReady(!cardReady);
            return addDatasServer(type)
        } else {
            return alert('need Accept/Add all quests')
        };
    }

    const drainDatasHandler = () => drainDatas(type);

    return (
        <DailyStyle cardReady={cardReady}>
            <DailyStyle.Container color={color}>
                <DailyStyle.Title color={color}>{title} {`${questCount}/${quests?.length}`}</DailyStyle.Title>
                    {
                        quests &&
                        quests.map(quest =>
                            <AfdQuest key={quest.id} quest={quest} order={quests.indexOf(quest)} color={color} type={type} changeCountHandler={changeCountHandler} />
                        )
                    }
                <AddQuest type={type} />
                <DailyStyle.Buttons>
                    <Button name='Ready' color='green' onClick={addDatasHandler} />
                    <Button name='Yesterday' color='yellow' onClick={drainDatasHandler} />
                </DailyStyle.Buttons>
            </DailyStyle.Container>
            <DailyStyle.Backside color={color} onClick={() => setCardReady(!cardReady)}>Ready</DailyStyle.Backside>
        </DailyStyle>
    )
}

export default DailyCard;