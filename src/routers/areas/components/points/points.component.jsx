import React from "react";

import { PointsContainer, Main } from './points.style';

const Points = ({ data }) => {
    const { title, untilTime, description } = data;

    return (
        <PointsContainer>
            <h2>{title}</h2>
            <span>{`Date: ${untilTime}`}</span>
            {/* <Main readOnly disabled defaultValue={description} /> */}
            <Main>{description}</Main>
        </PointsContainer>
    )
}

export default Points;