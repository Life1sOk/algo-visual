import React from "react";

import { QuestCardContainer, QuestTitle, ProgressBar } from './quest-card.style';
import Quest from "../quest/quest.component";

const QuestCard = ({ title, color, quests }) => {
    return (
        <QuestCardContainer color={color}>
            <QuestTitle color={color}>{title}</QuestTitle>
            {
                quests &&
                quests.map(quest =>
                    <Quest key={quest.id} quest={quest} />
                )
            }
            <ProgressBar>Progress bar</ProgressBar>
        </QuestCardContainer>
    )
}

export default QuestCard;