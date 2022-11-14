import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { changeCurrentColor, selectToAddPartColor } from '../../../../App/slices/areas-slice';

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
    const dispatch = useDispatch();
    const activeColor = useSelector(selectToAddPartColor);

    const addActiveColorHandler = (color) => dispatch(changeCurrentColor(color));


    return (
        <PartsBallsContainer>
            <span>Color:</span>
            {
                possibleColors?.map(ball => <ColorBall key={possibleColors.indexOf(ball)} color={ball}
                    onClick={() => addActiveColorHandler(ball)} active={ball === activeColor} />)
            }
        </PartsBallsContainer>
    )
}

export default PartsBalls;