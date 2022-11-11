import React from "react";

import ColorBall from "../color-ball/color-ball.component";
import { PartTitleBallContainer, PartTitle } from './part-title-ball.style';

const PartTitleBall = ({ color, title }) => {
    return (
        <PartTitleBallContainer>
            <ColorBall color={color} />
            <PartTitle>{title}</PartTitle>
        </PartTitleBallContainer>
    )
}

export default PartTitleBall;