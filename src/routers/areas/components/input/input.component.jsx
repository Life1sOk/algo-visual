import React, { memo } from "react";

import { TitleInput, TitleInputContainer } from './input.style';

const Input = memo(({ label, ...others }) => {
    return (
        <TitleInputContainer>
            <span>{label}</span>
            <TitleInput {...others} />
        </TitleInputContainer>
    )
})

export default Input;