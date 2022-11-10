import React from "react";

import ColorBall from "../../../../Components/color-ball/color-ball.component";
import { PartsBallsContainer } from './parts-balls.style';

const possibleColors = [
    'rgb(255, 99, 132)',
    'rgb(75, 192, 192)',
    'rgb(255, 205, 86)',
    'rgb(201, 203, 207)',
    'rgb(54, 162, 235)'
];

const PartsBalls = () => {
    return (
        <PartsBallsContainer>
            <span>Color:</span>
            {
                possibleColors?.map(ball => <ColorBall key={possibleColors.indexOf(ball)} color={ball} />)
            }
        </PartsBallsContainer>
    )
}

export default PartsBalls;