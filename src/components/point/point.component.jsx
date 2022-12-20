import React, { useState, memo } from "react";

import { useDispatch } from "react-redux";
import { deleteAchieve } from "../../App/slices/create-quest.slice";
import { currentPointStatusChanger, fixCurrentQuestCopy } from "../../App/slices/combined-areas.slice";


import ButtonSd from "../button-sd/button-sd.component";

import PointStyle from "./point.style";

const Point = memo(({ data, show, questIndex}) => {
    const { title, id, untilTime, description, status } = data;

    const dispatch = useDispatch();
    
    const [state, setState] = useState(false);

    const reverseHandler = () => setState(!state);

    const deletePointHandler = () => dispatch(deleteAchieve(id));

    const changedPointStatus = (action) => {
        const pointData = { questIndex, pointId: id, action };
        
        dispatch(fixCurrentQuestCopy(questIndex));
        dispatch(currentPointStatusChanger(pointData));
        reverseHandler();
    };

    return (
        <>
            {
                show ?
                <PointStyle.Front>
                    <PointStyle.ButtonWrapper>
                        <ButtonSd type='delete' background='white' onClick={deletePointHandler} />
                    </PointStyle.ButtonWrapper>
                    <PointStyle.Title title={title}>{title}</PointStyle.Title>
                    <PointStyle.Date>{`Date: ${untilTime}`}</PointStyle.Date>
                    <PointStyle.Description>{description}</PointStyle.Description>
                </PointStyle.Front>
                :
                <PointStyle activate={state}>
                    <PointStyle.Front onClick={reverseHandler} status={status}>
                        <PointStyle.Title title={title}>{title}</PointStyle.Title>
                        <PointStyle.Date>{`Date: ${untilTime}`}</PointStyle.Date>
                        <PointStyle.Description>{description}</PointStyle.Description>
                    </PointStyle.Front>
                    <PointStyle.Back>
                        <button onClick={() => changedPointStatus(true)}>Activate</button>
                        <button onClick={() => changedPointStatus(false)}>Deactivate</button>
                    </PointStyle.Back>
                </PointStyle>
            }
        </>
    )
})

export default Point;