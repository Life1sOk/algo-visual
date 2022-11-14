import React, { useState, useEffect } from "react";

import { selectAllParts } from "../../../../App/slices/areas-slice";

import PartsDisplayMain from "../parts-display-main/parts-display-main.component";
import PartsDisplayAdd from "../parts-display-add/parts-display-add.component";
import { PartsDescriptionContainer, PartsNav } from './parts-description.style';
import { useSelector } from "react-redux";

const PartsDescription = () => {
    const [activeSlide, setActiveSlide] = useState('main');
    const totalParts = useSelector(selectAllParts);

    useEffect(() => {
        if (totalParts.length <= 0) return setActiveSlide('add');
    }, [])

    return (
        <PartsDescriptionContainer>
            <PartsNav>
                <button onClick={() => setActiveSlide('main')}>Main</button>
                <button onClick={() => setActiveSlide('add')}>Add</button>
            </PartsNav>
            {
                activeSlide === 'main' ? <PartsDisplayMain />
                    :
                    activeSlide === 'add' ? <PartsDisplayAdd />
                        :
                        null
            }
        </PartsDescriptionContainer>
    )
}

export default PartsDescription;