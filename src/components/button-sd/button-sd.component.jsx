import React from "react";

import logoFrom from '../../Asset/replace-icon-24px.png';

import { ButtonSdDelete, ButtonSdShrink, ButtonSdFix, ButtonSdPlus, ButtonSdReplace } from './button-sd.style';

const ButtonSd = ({ type, color, background, scale, ...others }) => {
    return (
        <>
            {   type === 'plus' ? 
                    <ButtonSdPlus {...others} color={color} background={background} scale={scale} /> :
                    type === 'delete' ?
                        <ButtonSdDelete {...others} color={color} background={background} scale={scale} /> :
                        type === 'shrink' ?
                            <ButtonSdShrink {...others} color={color} background={background} scale={scale} /> :
                            type === 'fix' ?
                                <ButtonSdFix {...others} color={color} background={background} scale={scale} /> :
                                    type === 'replace' ? 
                                    <ButtonSdReplace {...others} color={color} background={background} scale={scale} src={logoFrom}/> : null 
            }
        </>
    )
}

export default ButtonSd;