import React from "react";

import { TitleInput, TitleInputContainer } from './input.style';

const Input = ({ label, ...others }) => {
    return (
        <TitleInputContainer>
            <span>{label}</span>
            <TitleInput {...others} />
        </TitleInputContainer>
    )
}

export default Input;