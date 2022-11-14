import React from "react";

import { NothingShowContainer } from './nothing-show.style';

const NothingShow = ({ name }) => {
    return (
        <NothingShowContainer>{name}</NothingShowContainer>
    )
}

export default NothingShow;