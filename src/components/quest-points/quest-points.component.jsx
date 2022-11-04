import React from "react";

import { QuestPointsContainer, QuestPointsDisplay } from './quest-points.style';
import Points from "../points/points.component";

const QuestPoints = ({ data, questIndex, questTitle }) => {

    return (
        <QuestPointsContainer>
            <h2 className="quest-points">Points:</h2>
            <QuestPointsDisplay>
                {
                    data[0] &&
                    data.map(point =>
                        <Points key={point.id} data={point} questIndex={questIndex} questTitle={questTitle} />
                    )
                }
            </QuestPointsDisplay>
        </QuestPointsContainer>
    )
}

export default QuestPoints;