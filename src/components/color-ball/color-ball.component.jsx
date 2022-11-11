import React from "react";

import { ColorBallContainer } from './color-ball.style';

const ColorBall = ({ color, active, ...others }) => {

    return (
        <ColorBallContainer color={color} status={active} {...others} />
    )
};

export default ColorBall;