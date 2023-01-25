import React, { useState, memo } from "react";

import { useDispatch } from "react-redux";

import { deleteSteps } from "../../App/slices/create-quest.slice";


import ButtonSd from "../button-sd/button-sd.component";

import PointStyle from "./point.style";

const Point = memo(({ data, show, changedPointStatus}) => {
    const dispatch = useDispatch();
    const { title, id, untilTime, description, status } = data;

    const [state, setState] = useState(false);

    const reverseHandler = () => setState(!state);

    const deletePointHandler = () => dispatch(deleteSteps(id));
    
    const forTrueHandler = {action: true, id};
    const forFalseHandler = {action: false, id};

    return (
        <>
            {
                show ?
                <PointStyle.Front>
                    <PointStyle.ButtonWrapper>
                        <ButtonSd type='delete' background='white' onClick={deletePointHandler} />
                    </PointStyle.ButtonWrapper>
                    {/* <PointStyle.Title title={title}>{title}</PointStyle.Title> */}
                    <PointStyle.Date>{`Date: ${untilTime}`}</PointStyle.Date>
                    <PointStyle.Description>{title}</PointStyle.Description>
                </PointStyle.Front>
                :
                <PointStyle activate={state}>
                    <PointStyle.Front onClick={reverseHandler} status={status}>
                        <PointStyle.Title title={title}>{title}</PointStyle.Title>
                        <PointStyle.Date>{`Date: ${untilTime}`}</PointStyle.Date>
                        <PointStyle.Description>{description}</PointStyle.Description>
                    </PointStyle.Front>
                    <PointStyle.Back>
                        <button onClick={() => changedPointStatus(forTrueHandler, reverseHandler)}>Activate</button>
                        <button onClick={() => changedPointStatus(forFalseHandler, reverseHandler)}>Deactivate</button>
                    </PointStyle.Back>
                </PointStyle>
            }
        </>
    )
})

export default Point;