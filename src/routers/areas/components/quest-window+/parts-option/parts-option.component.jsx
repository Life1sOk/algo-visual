import React, { forwardRef } from "react";

import { useSelector } from "react-redux";
import { selectParts } from "../../../../../App/slices/areas-slice";

import { PartsOptionSelect } from './parts-option.style';

const PartsOption = forwardRef(({disabled}, ref) => {
    const allParts = useSelector(selectParts);

    return (
            <PartsOptionSelect ref={ref} disabled={disabled}>
                {
                    allParts.map(option => <option key={allParts.indexOf(option)} value={option.title}>{option.title}</option>)
                }
            </PartsOptionSelect>
    )
})

export default PartsOption;