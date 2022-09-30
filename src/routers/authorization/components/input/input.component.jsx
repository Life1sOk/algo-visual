import React from "react";

import { InputContainer, CurrentInput } from './input.style';

const Input = ({ name, id, ...others }) => {

    return (
        <InputContainer>
            <label htmlFor={id}>{name}</label>
            <CurrentInput id={id} {...others} />
        </InputContainer>
    )
}

export default Input;