import React from "react";

import { QuestPointsConteiner, QuestPointsDisplay, PointsBallContainer, PointBall } from './quest-points.style';
import Points from "../points/points.component";

const QuestPoints = ({ data, questIndex, questTitle }) => {

    return (
        <QuestPointsConteiner>
            <PointsBallContainer>
                {
                    data[0] &&
                    data.map(point =>
                        <PointBall key={point.id}>{point.id}</PointBall>
                    )
                }
            </PointsBallContainer>
            <QuestPointsDisplay>
                {
                    data[0] &&
                    data.map(point =>
                        <Points key={point.id} data={point} questIndex={questIndex} questTitle={questTitle} />
                    )
                }
            </QuestPointsDisplay>
        </QuestPointsConteiner>
    )
}

export default QuestPoints;