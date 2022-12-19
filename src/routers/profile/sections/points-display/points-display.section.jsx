import React from "react";

import { useSelector } from "react-redux";
import { selectActivePoints } from "../../../../App/slices/combined-areas.slice";

import { PointsDisplayContainer } from './points-display.style';
import Point from "../../../../Components/point/point.component";

const PointsDisplay = () => {
    const activePoints = useSelector(selectActivePoints);

    return (
        <PointsDisplayContainer>
            {
                activePoints?.map(point => <Point key={point.id} data={point} />)
            }
        </PointsDisplayContainer>
    )
}

export default PointsDisplay;