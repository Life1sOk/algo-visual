import React, { useState, useEffect, useRef } from "react";

import PointSpringWrapper from "../../utils/spring-components/point";

import ButtonSd from "../button-sd/button-sd.component";
import Checkbox from "../checkbox/checkbox.component";

import { DiscriptionBox, PointContainer, PointSetting, PointWrapper, CheckboxWrapper } from './point.style';

const Point = ({data, deleteHandler, pointStatusChangeHandler, sendPointHeightHandler }) => {
    const [generatedHeight, setGeneratedHeight] = useState(0);
    const textThisRef = useRef(null);
    
    const { description, id, status, height } = data;

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

        if(sendPointHeightHandler) sendPointHeightHandler({id, height: generatedHeight});
    }, []);
    
    return(
        // <PointSpringWrapper>
        <PointWrapper delay={id + 1}>
            <CheckboxWrapper>
                <Checkbox onChange={(e) => pointStatusHandler(e.target.checked)} status={status}/>
            </CheckboxWrapper>
            <PointContainer>
                <DiscriptionBox ref={textThisRef} generatedHeight={generatedHeight} height={height} status={status} readOnly disabled value={description}/>
            </PointContainer>
        </PointWrapper>
        // </PointSpringWrapper>
    )
};

export default Point;

// {/* <PointSetting>
//                     <ButtonSd type='delete' color='blue' background='white' scale='7' onClick={deletePointHandler}/>
//                 </PointSetting> */}