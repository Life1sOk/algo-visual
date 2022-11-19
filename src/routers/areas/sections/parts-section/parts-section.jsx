import React, { useState, useEffect } from "react";

import { useSelector } from "react-redux";
import { selectAllParts } from "../../../../App/slices/areas-slice";

import PartsDisplayMain from "../../components/parts-display-main/parts-display-main.component";
import PartsDisplayAdd from "../../components/parts-display-add/parts-display-add.component";
import { PartsSectionContainer, PartsNav, PartsDisplayContainer } from './parts-section.style';

const PartsSection = () => {
    const [activeSlide, setActiveSlide] = useState('main');
    const totalParts = useSelector(selectAllParts);

    useEffect(() => {
        if (totalParts.length <= 0) return setActiveSlide('add');
    }, [])

    return (
        <PartsSectionContainer>
            <PartsNav>
                <button onClick={() => setActiveSlide('main')}>Main</button>
                <button onClick={() => setActiveSlide('add')}>Add</button>
            </PartsNav>
            <PartsDisplayContainer>
                {
                    activeSlide === 'main' ? <PartsDisplayMain />
                        :
                        activeSlide === 'add' ? <PartsDisplayAdd />
                            :
                            null
                }
            </PartsDisplayContainer>
        </PartsSectionContainer>
    )
}

export default PartsSection;