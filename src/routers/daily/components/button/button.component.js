import React from "react";

import { ButtonStyle } from './button.style';

const Button = ({ name, type, color, ...other }) => {
    return (
        <ButtonStyle color={color} {...other}>{name}</ButtonStyle>
    )
}

export default Button;