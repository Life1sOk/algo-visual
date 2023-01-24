import React, { forwardRef } from "react";

import { TextAreaDescription, TextAreaContainer } from './textarea.style';

const TextArea = forwardRef(({ type, label, ...others }, ref) => {
    return (
        <TextAreaContainer>
            {label ? <span htmlFor={type}>{label}</span> : null}
            <TextAreaDescription id={type} ref={ref} type={type} {...others} />
        </TextAreaContainer>
    )
})

export default TextArea;