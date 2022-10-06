import React from "react";

import { AreaPartContainer, CurrentPart } from './area-parts.style';

const AreaParts = ({ parts, setCurrentPart }) => {

    const changePartHandler = (part) => {
        setCurrentPart(part)
    }

    return (
        <AreaPartContainer>
            {parts &&
                Object.keys(parts).map(part => <CurrentPart onClick={() => changePartHandler(part)} key={part}>{part}</CurrentPart>)
            }
        </AreaPartContainer>
    )
}

export default AreaParts;