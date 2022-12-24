import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { currentPointStatusChanger } from "../../../App/slices/combined-areas.slice";
import { selectAuthUid } from "../../../App/slices/auth.slice";


import PointsStyle from "./points.style";
import Point from "../../point/point.component";

const Points = ({ data, questIndex }) => {
    const dispatch = useDispatch();
    const uid = useSelector(selectAuthUid);

    const changedPointStatus = ({action, id}, reverseHandler) => {
        const pointData = { questIndex, pointId: id, action, uid };
        
        dispatch(currentPointStatusChanger(pointData));
        reverseHandler();
    };

    return (
        <PointsStyle>
            <PointsStyle.Balls>
                {
                    data?.map(point =>
                        <PointsStyle.PointBall key={point.id} status={point.status}>{point.id}</PointsStyle.PointBall>
                    )
                }
            </PointsStyle.Balls>
            <PointsStyle.Points>
                {
                    data?.map(point =>
                        <Point key={point.id} data={point} changedPointStatus={changedPointStatus}/>
                    )
                }
            </PointsStyle.Points>
        </PointsStyle>
    )
}

export default Points;