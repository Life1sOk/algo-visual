import React, { useState, useEffect} from "react";

import { useDispatch, useSelector } from "react-redux";
import { changeDisplay, selectDisplaySectionTitle} from '../../../../App/slices/areas-slice';

import { AreaContainer, AreaIcon } from './area.style';
import arrow from '../../../../Asset/right-arrow.png';

const Area = ({ area }) => {
    const { title, mainColor, icon } = area;
    const dispatch = useDispatch();
    const currentAreaTitle = useSelector(selectDisplaySectionTitle);
    const [current, setCurrent] = useState(false);

    useEffect(() => {
        if (title === currentAreaTitle) {
            setCurrent(true);
        } else {
            setCurrent(false);
        }
    }, [title, currentAreaTitle]);

    const changeSectionHandler = () => {
        dispatch(changeDisplay(title));
    };

    return (
        <>
            <AreaContainer current={current} color={mainColor} onClick={changeSectionHandler}>
                {current ? <img className="arrow" alt="arrow" src={arrow} /> : null}
                <h3>{title}</h3>
                <AreaIcon alt="title" src={icon}/>
            </AreaContainer>
        </>
    )
};

export default Area;