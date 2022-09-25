import React from "react";

import { ButtonStyle } from './button.style';

const Button = ({ name, type, ...other }) => {
    return (
        <ButtonStyle color={type} {...other}>{name}</ButtonStyle>
    )
}

export default Button;