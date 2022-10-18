import React from "react";

import { TextAreaDescription, TextAreaContainer } from './textarea.style';

const TextArea = ({ type, label }) => {
    return (
        <TextAreaContainer>
            <label htmlFor={type}>{label}</label>
            <TextAreaDescription id={type} type={type} />
        </TextAreaContainer>
    )
}

export default TextArea;