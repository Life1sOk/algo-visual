import React from "react";

import { ColorBallContainer } from './color-ball.style';

const ColorBall = ({ color, ...others }) => {
    return (
        <ColorBallContainer color={color} {...others} />
    )
}

export default ColorBall;