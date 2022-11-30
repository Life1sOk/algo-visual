import React from "react";

import ColorBall from "../../../../../Components/color-ball/color-ball.component";
import { LineStyle } from './part-line.style';

const Line = ({data, deleteHandler, index}) => {
    const { title, color } = data;

    return(
        <LineStyle>
            <ColorBall color={color}/>
            <span>{title}</span>
            <button onClick={() => deleteHandler(index)}>D</button>
        </LineStyle>
    )
}

export default Line;