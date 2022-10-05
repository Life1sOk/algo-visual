import React from "react";

import { AreaPartContainer, CurrentPart } from './area-parts.style';

const AreaParts = ({ parts }) => {
    return (
        <AreaPartContainer>
            {parts &&
                parts.map(part => <CurrentPart>{part}</CurrentPart>)
            }
        </AreaPartContainer>
    )
}

export default AreaParts;