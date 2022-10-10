import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { changeDisplay, selectAreas } from '../../../../App/slices/areas-slice';

import { AreaContainer, AreaIcon } from './area.style';

const Area = ({ area, state, setState }) => {
    const dispatch = useDispatch();
    const currentArea = useSelector(selectAreas);
    const { title, mainColor, icon } = currentArea[area];
    const [current, setCurrent] = useState(false);

    useEffect(() => {
        if (state === title) {
            setCurrent(true);
        } else {
            setCurrent(false);
        }
    }, [state, title])

    const changeSectionHandler = () => {
        setState(title);
        dispatch(changeDisplay(area));
    }


    return (
        <AreaContainer current={current} color={mainColor} onClick={changeSectionHandler}>
            <h3>{area}</h3>
            <AreaIcon alt="title" src={icon} />
        </AreaContainer>
    )
}

export default Area;