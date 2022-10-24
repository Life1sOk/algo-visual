import React from "react";

import { QuestPointsContainer, QuestPointsDisplay, QuestPoint } from './quest-points.style';
import Points from "../points/points.component";

const QuestPoints = ({ data }) => {
    return (
        <QuestPointsContainer>
            <h2 className="quest-points">Points:</h2>
            <QuestPointsDisplay>
                {
                    data[0] &&
                    data.map(point =>
                        <QuestPoint key={point.id}>
                            <h2 className="point-title">{point.title}</h2>
                            <p>Date: {point.untilTime}</p>
                            <p className="point-description">{point.description}</p>
                        </QuestPoint>
                    )
                }
            </QuestPointsDisplay>
        </QuestPointsContainer>
    )
}

export default QuestPoints;