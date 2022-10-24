import React from "react";

import { QuestMainContainer, QuestMainTitle, QuestRoad } from './quest-main.style';

const QuestMain = ({ id, data }) => {
    const { title, current, mainGoal, description } = data;

    return (
        <QuestMainContainer>
            <QuestMainTitle>
                <span className="quest-id">{id}</span>
                <span className="quest-title">{title}</span>
            </QuestMainTitle>
            <QuestRoad>
                <p className="label">Current state:</p>
                <p>{current}</p>
            </QuestRoad>
            <QuestRoad>
                <p className="label">Want to:</p>
                <p>{mainGoal}</p>
            </QuestRoad>
            <QuestRoad>
                <p className="label">Why?</p>
                <p>{description}</p>
            </QuestRoad>
        </QuestMainContainer>
    )
}

export default QuestMain;