import React, { useState, useEffect, memo } from "react";

import { useDispatch, useSelector } from "react-redux";
import { changeDisplay, selectAreas } from '../../../../App/slices/areas-slice';
import { selectAreaState } from "../../../../App/slices/aside-menu.slice";

import { AreaContainer, AreaIcon } from './area.style';
import arrow from '../../../../Asset/right-arrow.png';

const Area = ({ area, state, setState }) => {
    const dispatch = useDispatch();
    const currentArea = useSelector(selectAreas);
    const pageState = useSelector(selectAreaState);
    const { title, mainColor, icon } = currentArea[area];
    const [current, setCurrent] = useState(false);

    useEffect(() => {
        if (state === title) {
            setCurrent(true);
        } else {
            setCurrent(false);
        }
    }, [state, title]);

    const changeSectionHandler = () => {
        setState(title);
        dispatch(changeDisplay(area));
    };

    return (
        <AreaContainer current={current} color={mainColor} onClick={changeSectionHandler} pageState={pageState}>
            {current ? <img className="arrow" alt="arrow" src={arrow} /> : null}
            {pageState ? <h3>{area}</h3> : null}
            <AreaIcon alt="title" src={icon} />
        </AreaContainer>
    )
}

export default Area;