import React from "react";

import { TitleInput, TitleInputContainer } from './input.style';

const Input = ({ label }) => {
    return (
        <TitleInputContainer>
            <label htmlFor='addTitle'>{label}</label>
            <TitleInput id='addTitle' />
        </TitleInputContainer>
    )
}

export default Input;