import React, { useState, useEffect, useRef } from "react";

import ButtonSd from "../button-sd/button-sd.component";
import { DiscriptionBox, PointContainer, PointSetting, Wrapper } from './point.style';

const Point = ({data, deleteHandler}) => {
    const [open, setOpen] = useState(false);
    const [generatedHeight, setGeneratedHeight] = useState(null);
    const textThisRef = useRef(null);
    
    const { description, id } = data;

    const deletePointHandler = () => deleteHandler(id);

    useEffect(() => {
        const scrollHeight = textThisRef?.current.scrollHeight;
        setGeneratedHeight(scrollHeight);
        setOpen(true);
    }, []);
    
    return(
        <PointContainer state={open} generatedHeight={generatedHeight}>
            <Wrapper>
                <DiscriptionBox ref={textThisRef} readOnly disabled value={description}/>
            </Wrapper>
            <PointSetting>
                <ButtonSd type='delete' color='blue' background='white' scale='7' onClick={deletePointHandler}/>
            </PointSetting>
        </PointContainer>
    )
};

export default Point;