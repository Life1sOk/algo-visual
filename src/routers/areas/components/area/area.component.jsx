import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { changeDisplay, selectAreas, selectDisplaySection} from '../../../../App/slices/areas-slice';

import { AreaContainer, AreaIcon } from './area.style';
import arrow from '../../../../Asset/right-arrow.png';

const Area = ({ area }) => {
    const dispatch = useDispatch();
    const currentArea = useSelector(selectAreas);
    const {title} = useSelector(selectDisplaySection);
    const { mainColor, icon } = currentArea[area];
    const [current, setCurrent] = useState(false);

    useEffect(() => {
        if (title === area) {
            setCurrent(true);
        } else {
            setCurrent(false);
        }
    }, [title, area]);

    const changeSectionHandler = () => {
        dispatch(changeDisplay(area));
    };

    return (
            <AreaContainer current={current} color={mainColor} onClick={changeSectionHandler}>
                {current ? <img className="arrow" alt="arrow" src={arrow} /> : null}
                <h3>{area}</h3>
                <AreaIcon alt="title" src={icon} />
            </AreaContainer>
    )
}

export default Area;