import React from "react";

import ColorBall from "../color-ball/color-ball.component";
import { PartTitleBallContainer, PartTitle } from './part-title-ball.style';

const PartTitleBall = ({ color, title, index, deleteHandler }) => {

    return (
        <PartTitleBallContainer>
            <ColorBall color={color} />
            <PartTitle>{title}</PartTitle>
            <button>fix</button>
            <button onClick={() => deleteHandler(index)}>del</button>
        </PartTitleBallContainer>
    )
}

export default PartTitleBall;