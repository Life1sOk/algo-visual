import React from "react";

import { QuestMainContainer, QuestMainTitle, QuestRoad, QuestDisplayRoadLinks } from './quest-main.style';

const QuestMain = ({ id, data, area }) => {
    const { title, current, mainGoal, description } = data;
    console.log(data)

    return (
        <QuestMainContainer>
            <QuestDisplayRoadLinks>
                <span>{area}</span>
                <span>{data.part}</span>
            </QuestDisplayRoadLinks>
            <QuestMainTitle>
                <span className="quest-id">{id}</span>
                <h3 className="quest-title">{title}</h3>
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
            <div className="progress">Progress Bar</div>
        </QuestMainContainer>
    )
}

export default QuestMain;