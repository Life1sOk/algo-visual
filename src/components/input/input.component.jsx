import React, { forwardRef } from "react";

import { TitleInput, TitleInputContainer } from './input.style';

const Input = forwardRef(({ label, ...others }, ref) => {
    return (
        <TitleInputContainer>
            <span>{label}</span>
            <TitleInput ref={ref} {...others} />
        </TitleInputContainer>
    )
})

export default Input;