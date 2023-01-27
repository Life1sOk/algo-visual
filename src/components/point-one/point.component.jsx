import React, { useState, useEffect, useRef } from "react";

import ButtonSd from "../button-sd/button-sd.component";
import Checkbox from "../checkbox/checkbox.component";

import { DiscriptionBox, PointContainer, PointSetting, PointWrapper, CheckboxWrapper } from './point.style';

const Point = ({data, deleteHandler, pointStatusChangeHandler, pickedId }) => {
    const [generatedHeight, setGeneratedHeight] = useState(0);
    const textThisRef = useRef(null);

    // Height add to state and use it as param;
    
    const { description, id, status } = data;

    const pointStatusHandler = (checked) => {
        if(!pointStatusChangeHandler) return;
        pointStatusChangeHandler(checked, id)
    }

    const deletePointHandler = () => {
        if(!deleteHandler) return;
        deleteHandler(id);
    };
    
    useEffect(() => {
        const scrollHeight = textThisRef.current.scrollHeight;
        setGeneratedHeight(scrollHeight);
    }, [pickedId]);
    
    return(
        <PointWrapper delay={id + 1}>
            <CheckboxWrapper>
                <Checkbox onChange={(e) => pointStatusHandler(e.target.checked)} status={status}/>
            </CheckboxWrapper>
            <PointContainer>
                <DiscriptionBox ref={textThisRef} generatedHeight={generatedHeight} readOnly disabled value={description}/>
            </PointContainer>
        </PointWrapper>
    )
};

export default Point;

// {/* <PointSetting>
//                     <ButtonSd type='delete' color='blue' background='white' scale='7' onClick={deletePointHandler}/>
//                 </PointSetting> */}