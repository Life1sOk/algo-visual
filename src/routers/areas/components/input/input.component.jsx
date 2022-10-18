import React from "react";

import { TitleInput, TitleInputContainer } from './input.style';

const Input = () => {
    return (
        <TitleInputContainer>
            <label htmlFor='addTitle'>Goal Title:</label>
            <TitleInput id='addTitle' />
        </TitleInputContainer>
    )
}

export default Input;