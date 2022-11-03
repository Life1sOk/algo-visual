import React from "react";

import { useSelector } from "react-redux";
import { selectActivePoints } from "../../../../App/slices/combined-areas.slice";

import { PointsDisplayContainer } from './points-display.style';
import Points from "../../../../Components/points/points.component";

const PointsDisplay = () => {
    const activePoints = useSelector(selectActivePoints);

    return (
        <PointsDisplayContainer>
            {
                activePoints.map(point => <Points key={point.id} data={point} />)
            }
        </PointsDisplayContainer>
    )
}

export default PointsDisplay;