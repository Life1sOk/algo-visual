import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { selectActiveStep, deletePoints } from "../../../../../../App/slices/create-quest.slice";

import Point from "../../../../../../Components/point-one/point.component";

import { PointsContainer } from './points.style';

const Points = ({steps, children}) => {
    const dispatch = useDispatch();
    const index = useSelector(selectActiveStep);

    const deletePoint = (index) => dispatch(deletePoints(index));

    return(
        <PointsContainer>
            {children}
            {
                steps[index]?.points?.map((point, index) => <Point key={index} data={point} deleteHandler={deletePoint}/>)
            }
        </PointsContainer>
    )
}

export default Points;