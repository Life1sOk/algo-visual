import React from "react";

import { QuestCardContainer, QuestTitle, ProgressBar } from './quest-card.style';
import Quest from "../quest/quest.component";

const QuestCard = ({ type, color, quests }) => {
    return (
        <QuestCardContainer color={color}>
            <QuestTitle color={color}>{type} quest</QuestTitle>
            {quests &&
                quests.map(quest => <Quest key={quest.id} quest={quest} />)
            }
            <ProgressBar>Progress bar</ProgressBar>
        </QuestCardContainer>
    )
}

export default QuestCard;