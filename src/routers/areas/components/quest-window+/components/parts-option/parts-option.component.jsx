import React, { forwardRef } from "react";

import { PartsOptionSelect } from './parts-option.style';

const PartsOption = forwardRef(({disabled, options, pickPartHandler}, ref) => {

    return (
            <PartsOptionSelect ref={ref} disabled={disabled} onChange={(e) => pickPartHandler(e.target.value)}>
                {
                    options.map((option, index) => <option key={index} value={option.title}>{option.title}</option>)
                }
            </PartsOptionSelect>
    )
});

export default PartsOption;