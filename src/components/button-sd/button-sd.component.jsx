import React from "react";

import { ButtonSdDelete, ButtonSdShrink, ButtonSdFix } from './button-sd.style';

const ButtonSd = ({ type, color, background, scale, ...others }) => {
    return (
        <>
            {
                type === 'delete' ?
                    <ButtonSdDelete {...others} color={color} background={background} scale={scale} /> :
                    type === 'shrink' ?
                        <ButtonSdShrink {...others} color={color} background={background} scale={scale} /> :
                        type === 'fix' ?
                            <ButtonSdFix {...others} color={color} background={background} scale={scale} /> :
                            null
            }
        </>
    )
}

export default ButtonSd;