import React from "react";

import { AreaPartContainer } from './area-parts.style';
import CurrentPart from "../current-part/current-part.component";

const AreaParts = ({ parts, setCurrentPart, currentPart }) => {

    const changePartHandler = (part) => {
        setCurrentPart(part)
    };

    return (
        <AreaPartContainer>
            {parts &&
                Object.keys(parts).map(part =>
                    <CurrentPart onClick={() => changePartHandler(part)} key={part} currentPart={currentPart}>{part}</CurrentPart>)
            }
        </AreaPartContainer>
    )
}

export default AreaParts;