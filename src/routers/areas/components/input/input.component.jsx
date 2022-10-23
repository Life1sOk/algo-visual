import React from "react";

import { TitleInput, TitleInputContainer } from './input.style';

const Input = ({ label, ...others }) => {
    return (
        <TitleInputContainer>
            <label htmlFor='addTitle'>{label}</label>
            <TitleInput id='addTitle' {...others} />
        </TitleInputContainer>
    )
}

export default Input;