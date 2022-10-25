import React from "react";

import { PointsContainer, Main } from './points.style';

const Points = ({ data }) => {
    const { title, untilTime, description } = data;

    return (
        <PointsContainer>
            <span className="points-title">{title}</span>
            <span className="points-date">{`Date: ${untilTime}`}</span>
            <Main>{description}</Main>
        </PointsContainer>
    )
}

export default Points;