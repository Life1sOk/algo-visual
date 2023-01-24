import React from "react";

import { ButtonQWStyle } from './button-qw.style';

const ButtonQW = ({absolute, title, ...others}) => {
    return(
        <ButtonQWStyle absolute={absolute} {...others}>{title}</ButtonQWStyle>
    )
}

export default ButtonQW;