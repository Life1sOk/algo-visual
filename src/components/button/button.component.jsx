import React from "react";

import { ButtonContainer } from './button.style';

const Button = ({name, type, ...others}) => {
    return(
        <ButtonContainer {...others} type={type}>{name}</ButtonContainer>
    )
}

export default Button;