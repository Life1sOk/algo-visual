import React from "react";

import { AreaContainer, AreaIcon } from './area.style';

const Area = ({ area }) => {
    const { title, mainColor, icon } = area;

    return (
        <AreaContainer color={mainColor}>
            <h3>{title}</h3>
            <AreaIcon alt="title" src={icon} />
        </AreaContainer>
    )
}

export default Area;