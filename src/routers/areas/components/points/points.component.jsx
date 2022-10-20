import React from "react";

import { PointsContainer, Main } from './points.style';

const Points = () => {
    return (
        <PointsContainer>
            <h2>English</h2>
            <p>Date</p>
            <Main readOnly disabled defaultValue='DescriptionDescription Description Description Description' />
        </PointsContainer>
    )
}

export default Points;