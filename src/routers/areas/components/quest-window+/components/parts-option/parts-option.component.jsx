import React, { forwardRef } from "react";

import { PartsOptionSelect } from './parts-option.style';

const PartsOption = forwardRef(({disabled, options}, ref) => {

    return (
            <PartsOptionSelect ref={ref} disabled={disabled}>
                {
                    options.map((option, index) => <option key={index} value={option.title}>{option.title}</option>)
                }
            </PartsOptionSelect>
    )
});

export default PartsOption;