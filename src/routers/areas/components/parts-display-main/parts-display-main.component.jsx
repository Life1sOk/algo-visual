import React from "react";

import { useSelector } from "react-redux";
import { selectAllParts } from "../../../../App/slices/parts-slice";

import PartsDisplayMainPart from "../parts-display-main-part/parts-display-main-part.component";
import { PartsDisplayMainContainer } from './parts-display-main.style';

const PartsDisplayMain = () => {
    const allPartsData = useSelector(selectAllParts);

    return (
        <PartsDisplayMainContainer>
            {
                allPartsData.map(part => <PartsDisplayMainPart key={allPartsData.indexOf(part)} data={part} />)
            }
        </PartsDisplayMainContainer>
    )
}

export default PartsDisplayMain;