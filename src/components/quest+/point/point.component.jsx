import React, { useState } from "react";

import PointStyle from "./point.style";

const Point = ({ data, show, questIndex, questTitle }) => {
    const { title, id, untilTime, description, status } = data;
    const [state, setState] = useState(false);

    const reverseHandler = () => setState(!state);

    const setChangedPointStatus = (status) => {
    };

    return (
        <PointStyle activate={state}>
            <PointStyle.Front onClick={reverseHandler} status={status}>
                <PointStyle.Title title={title}>{title}</PointStyle.Title>
                <PointStyle.Date>{`Date: ${untilTime}`}</PointStyle.Date>
                <PointStyle.Description>{description}</PointStyle.Description>
            </PointStyle.Front>
            <PointStyle.Back onClick={reverseHandler}>
                <button onClick={() => setChangedPointStatus(true)}>Activate</button>
                <button onClick={() => setChangedPointStatus(false)}>Deactivate</button>
            </PointStyle.Back>
        </PointStyle>
    )
}

export default Point;