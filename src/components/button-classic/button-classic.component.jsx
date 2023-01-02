import React from "react";

import { ButtonClassicStyle } from './button-classic.style';

const ButtonClassic = ({name, state, ...others}) => {
    return (
        <ButtonClassicStyle {...others} state={state}>{name}</ButtonClassicStyle>
    )
}

export default ButtonClassic;