import React, { useState, useEffect } from "react";

import { useDispatch } from "react-redux";
import { changeDisplay } from '../../../../App/slices/areas-slice';

import { AreaContainer, AreaIcon } from './area.style';

const Area = ({ area, state, setState }) => {
    const dispatch = useDispatch();
    const [current, setCurrent] = useState(false);
    const { title, mainColor, icon, id } = area;

    useEffect(() => {
        if (state === title) {
            setCurrent(true);
        } else {
            setCurrent(false);
        }
    }, [state, title])

    const changeSectionHandler = () => {
        setState(title);
        dispatch(changeDisplay(id));
    }

    return (
        <AreaContainer current={current} color={mainColor} onClick={changeSectionHandler}>
            <h3>{title}</h3>
            <AreaIcon alt="title" src={icon} />
        </AreaContainer>
    )
}

export default Area;