import React from "react";

import { PointsContainer, Main } from './points.style';

const Points = ({ data }) => {
    const { title, untilTime, description } = data;

    return (
        <PointsContainer>
            <h2>{title}</h2>
            {
                untilTime &&
                <p>{`Date: ${untilTime}`}</p>
            }
            <Main readOnly disabled defaultValue={description} />
        </PointsContainer>
    )
}

export default Points;