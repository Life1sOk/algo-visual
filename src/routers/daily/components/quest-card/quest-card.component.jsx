import React, { useState } from "react";

import { QuestCardContainer, QuestTitle, QuestFooter } from './quest-card.style';
import FixQuest from "../fix-quest/fix-quest.component";
import AddQuest from '../../../../Components/add-quest/add-quest.component';
import Button from "../button/button.component";

const QuestCard = ({ title, color, quests, type, addDatasServer, drainDatasHandler, filterHandler }) => {
    //Add statistic to add and finished to check from FixQuest --> count should be === ready to add (useState)//;
    const [questCount, setQuestCount] = useState(0);

    const changeCountHandler = (side) => {
        if (side === 'increase') return setQuestCount(questCount + 1);
        if (side === 'decrease') return setQuestCount(questCount - 1);
    }

    const addDatasHandler = () => {
        if (questCount === quests.length) {
            return addDatasServer()
        } else {
            return alert('need Accept all quests')
        };
    }
    console.log(quests)

    return (
        <QuestCardContainer color={color}>
            <QuestTitle color={color}>{title} {`${questCount}/${quests.length}`}</QuestTitle>
            {
                quests &&
                quests.map(quest =>
                    <FixQuest key={quest.id} quest={quest} order={quests.indexOf(quest)} color={color} type={type} changeCountHandler={changeCountHandler} />
                )
            }
            <AddQuest type={type} filterHandler={filterHandler} />
            <QuestFooter>
                <Button name='Ready' color='green' onClick={addDatasHandler} />
                <Button name='Yesterday' color='yellow' onClick={drainDatasHandler} />
            </QuestFooter>
        </QuestCardContainer>
    )
}

export default QuestCard;