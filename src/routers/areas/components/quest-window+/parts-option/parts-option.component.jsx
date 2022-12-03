import React, { forwardRef } from "react";

import { useSelector } from "react-redux";
import { selectAllParts } from "../../../../../App/slices/areas-slice";

import { PartsOptionSelect } from './parts-option.style';

const PartsOption = forwardRef((_props, ref) => {
    const allParts = useSelector(selectAllParts);

    return (
            <PartsOptionSelect ref={ref}>
                {
                    allParts.map(option => <option key={allParts.indexOf(option)} value={option.title}>{option.title}</option>)
                }
            </PartsOptionSelect>
    )
})

export default PartsOption;