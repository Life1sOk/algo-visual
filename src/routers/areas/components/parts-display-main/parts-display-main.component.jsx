import React from "react";

import { useSelector } from "react-redux";
import { selectAllParts } from "../../../../App/slices/areas-slice";

import PartsCircle from "../parts-circle/parts-circle.component";
import PartsDisplayMainPart from "../parts-display-main-part/parts-display-main-part.component";
import { PartsDisplayMainContainer, PartsDisplayMainWrapper } from './parts-display-main.style';

const PartsDisplayMain = () => {
    const allPartsData = useSelector(selectAllParts);

    return (
        <PartsDisplayMainWrapper>
            <PartsDisplayMainContainer>
                {
                    allPartsData.map(part => <PartsDisplayMainPart key={allPartsData.indexOf(part)} data={part} />)
                }
            </PartsDisplayMainContainer>
            <PartsCircle />
        </PartsDisplayMainWrapper>
    )
}

export default PartsDisplayMain;