import React from "react";

import { TextAreaDescription, TextAreaContainer } from './textarea.style';

const TextArea = ({ type, label, ...others }) => {
    return (
        <TextAreaContainer>
            {label ? <label htmlFor={type}>{label}</label> : null}
            <TextAreaDescription id={type} type={type} {...others} />
        </TextAreaContainer>
    )
}

export default TextArea;