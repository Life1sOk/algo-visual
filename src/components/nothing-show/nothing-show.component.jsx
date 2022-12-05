import React from "react";

import { NothingShowContainer } from './nothing-show.style';

const NothingShow = ({ name, height, width, color }) => {
    return (
        <NothingShowContainer height={height} width={width} color={color}>{name}</NothingShowContainer>
    )
}

export default NothingShow;