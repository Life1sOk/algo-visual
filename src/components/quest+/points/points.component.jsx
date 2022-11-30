import React from "react";

import PointsStyle from "./points.style";
import Point from "../point/point.component";

const Points = ({ data, questIndex, questTitle }) => {

    return (
        <PointsStyle>
            <PointsStyle.Balls>
                {
                    data?.map(point =>
                        <PointsStyle.PointBall key={point.id}>{point.id}</PointsStyle.PointBall>
                    )
                }
            </PointsStyle.Balls>
            <PointsStyle.Points>
                {
                    data?.map(point =>
                        <Point key={point.id} data={point} questIndex={questIndex} questTitle={questTitle} />
                    )
                }
            </PointsStyle.Points>
        </PointsStyle>
    )
}

export default Points;