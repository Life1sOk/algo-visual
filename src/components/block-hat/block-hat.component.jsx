import React from "react";

import { Hat, HatChildren, Line } from './block-hat.style';

const BlockHat = ({title, setting, handler, children}) => {
    return(
        <>
            <Hat>
                <HatChildren>
                    <span>{title}</span>
                    {children}
                </HatChildren>
                <span className="setting" onClick={handler}>{setting}</span>
            </Hat>
            <Line />
        </>
    )
}

export default BlockHat;