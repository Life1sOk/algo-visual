import React from "react";

import { QuestPointsContainer, QuestPointsDisplay, QuestPoint } from './quest-points.style';
import Points from "../points/points.component";

const QuestPoints = ({ data, questId }) => {

    return (
        <QuestPointsContainer>
            <h2 className="quest-points">Points:</h2>
            <QuestPointsDisplay>
                {
                    data[0] &&
                    data.map(point =>
                        <Points key={point.id} data={point} questId={questId} />
                    )
                }
            </QuestPointsDisplay>
        </QuestPointsContainer>
    )
}

export default QuestPoints;