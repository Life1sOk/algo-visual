import React from "react";

import { ButtonStyle, ButtonSwitch } from './button.style';

const Button = ({ name, type, color, on, ...other }) => {

    return (
        <>
            {
                type ?
                    <ButtonSwitch on={on} color={color} type={type} {...other}>{name}</ButtonSwitch>
                    :
                    <ButtonStyle color={color} {...other}>{name}</ButtonStyle>
            }
        </>
    )
}

export default Button;