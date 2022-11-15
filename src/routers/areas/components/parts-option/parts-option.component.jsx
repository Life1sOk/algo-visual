import React, { forwardRef } from "react";

import { useSelector } from "react-redux";
import { selectAllParts } from "../../../../App/slices/areas-slice";

import { PartsOptionContainer, PartsOptionSelect } from './parts-option.style';

const PartsOption = forwardRef((props, ref) => {
    const allParts = useSelector(selectAllParts);

    return (
        <PartsOptionContainer>
            <h3>Pick part:</h3>
            <PartsOptionSelect ref={ref}>
                {
                    allParts.map(option => <option key={allParts.indexOf(option)} value={option.title}>{option.title}</option>)
                }
            </PartsOptionSelect>
        </PartsOptionContainer>
    )
})

export default PartsOption;