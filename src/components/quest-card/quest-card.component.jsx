import React from "react";

import { QuestCardContainer, QuestTitle } from './quest-card.style';
import Quest from "../quest/quest.component";

const QuestCard = ({ type, color, quests }) => {
    return (
        <QuestCardContainer color={color}>
            <QuestTitle color={color}>{type} quest</QuestTitle>
            <Quest questName='First need to do!' />
            <Quest questName='Second need to do!' />
            <Quest questName='Third need to do!' />
            <div>Progress bar</div>
        </QuestCardContainer>
    )
}

export default QuestCard;