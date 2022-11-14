import React from "react";

import { useSelector } from "react-redux";
import { selectAllParts } from "../../../../App/slices/areas-slice";

import { PartsOptionContainer } from './parts-option.style';

const PartsOption = () => {
    const allParts = useSelector(selectAllParts);

    return (
        <PartsOptionContainer>
            <h3>Pick part: </h3>
            {
                allParts.map(option => <option value={option.title}>{option.title}</option>)
            }
        </PartsOptionContainer>
    )
}

export default PartsOption;