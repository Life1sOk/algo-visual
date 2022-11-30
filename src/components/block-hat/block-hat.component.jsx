import React from "react";

import {Hat, Line} from './block-hat.style';

const BlockHat = ({title, setting, handler}) => {
    return(
        <>
            <Hat>
                <span>{title}</span>
                <span className="setting" onClick={handler}>{setting}</span>
            </Hat>
            <Line />
        </>
    )
}

export default BlockHat;