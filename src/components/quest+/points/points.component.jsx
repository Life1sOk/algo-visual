import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { selectQuestFixPoint, fixCurrentQuestCopyClear } from "../../../App/slices/combined-areas.slice";
import { selectAuthUid } from "../../../App/slices/auth.slice";
import { addQuestServer, deleteQuestServer } from "../../../utils/firebase/firebase";


import PointsStyle from "./points.style";
import Point from "../../point/point.component";

const Points = ({ data, questIndex, currentQuest }) => {
    const dispatch = useDispatch();
    const questFixPoint = useSelector(selectQuestFixPoint);
    const uid = useSelector(selectAuthUid);

  
    useEffect(() => {
        if(questFixPoint.id === currentQuest.id) {
            deleteQuestServer(uid, questFixPoint, 'active');
            addQuestServer(uid, currentQuest);
            dispatch(fixCurrentQuestCopyClear());
        }
    }, [questFixPoint])

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
                        <Point key={point.id} data={point} questIndex={questIndex}/>
                    )
                }
            </PointsStyle.Points>
        </PointsStyle>
    )
}

export default Points;