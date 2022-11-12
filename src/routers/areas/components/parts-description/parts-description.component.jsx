import React, { useState } from "react";

import PartsDisplayMain from "../parts-display-main/parts-display-main.component";
import PartsDisplayAdd from "../parts-display-add/parts-display-add.component";
import { PartsDescriptionContainer, PartsNav } from './parts-description.style';

const PartsDescription = () => {
    const [activeSlide, setActiveSlide] = useState('main');

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