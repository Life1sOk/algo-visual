import React from "react";

import { TextAreaDescription, TextAreaContainer } from './textarea.style';

const TextArea = ({ type, label, ...others }) => {
    return (
        <TextAreaContainer>
            {label ? <span htmlFor={type}>{label}</span> : null}
            <TextAreaDescription id={type} type={type} {...others} />
        </TextAreaContainer>
    )
}

export default TextArea;