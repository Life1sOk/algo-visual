import React from "react";

import { ButtonSdDelete, ButtonSdShrink, ButtonSdFix } from './button-sd.style';

const ButtonSd = ({ type, ...others }) => {
    return (
        <>
            {
                type === 'delete' ?
                    <ButtonSdDelete {...others} /> :
                    type === 'shrink' ?
                        <ButtonSdShrink {...others} /> :
                        type === 'fix' ?
                            <ButtonSdFix {...others} /> :
                            null
            }
        </>
    )
}

export default ButtonSd;