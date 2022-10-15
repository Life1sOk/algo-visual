import React, { useState } from "react";

import { QuestCardWrapper, QuestCardContainer, QuestTitle, QuestFooter, QuestCardBack } from './quest-card.style';
import FixQuest from "../fix-quest/fix-quest.component";
import AddQuest from '../../../../Components/add-quest/add-quest.component';
import Button from "../button/button.component";

const QuestCard = ({ title, color, quests, type, addDatasServer, drainDatasHandler }) => {
    const [cardReady, setCardReady] = useState(false);
    const [questCount, setQuestCount] = useState(0);

    const changeCountHandler = (side) => {
        if (side === 'increase') return setQuestCount(questCount + 1);
        if (side === 'decrease') return setQuestCount(questCount - 1);
    }

    const addDatasHandler = () => {
        if (questCount === quests.length && quests.length > 0) {
            setCardReady(!cardReady);
            return addDatasServer()
        } else {
            return alert('need Accept/Add all quests')
        };
    }

    return (
        <QuestCardWrapper cardReady={cardReady}>
            <QuestCardContainer color={color}>
                <QuestTitle color={color}>{title} {`${questCount}/${quests?.length}`}</QuestTitle>
                {
                    quests &&
                    quests.map(quest =>
                        <FixQuest key={quest.id} quest={quest} order={quests.indexOf(quest)} color={color} type={type} changeCountHandler={changeCountHandler} />
                    )
                }
                <AddQuest type={type} />
                <QuestFooter>
                    <Button name='Ready' color='green' onClick={addDatasHandler} />
                    <Button name='Yesterday' color='yellow' onClick={drainDatasHandler} />
                </QuestFooter>
            </QuestCardContainer>
            <QuestCardBack color={color} onClick={() => setCardReady(!cardReady)}>Done</QuestCardBack>
        </QuestCardWrapper>
    )
}

export default QuestCard;