import React from "react";

import { ButtonQWStyle } from './button-qw.style';

const ButtonQW = ({absolute, title, zindex, ...others}) => {
    return(
        <ButtonQWStyle absolute={absolute} zindex={zindex} {...others}>{title}</ButtonQWStyle>
    )
}

export default ButtonQW;