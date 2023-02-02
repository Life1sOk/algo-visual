import React from "react";

import { ButtonFtStyle } from './button-ft.style';

const ButtonFt = ({name, ...others}) => {
    return(
        <ButtonFtStyle {...others}>{name}</ButtonFtStyle>
    )
};

export default ButtonFt;