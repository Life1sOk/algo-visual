import React from "react";

import PartsCircle from "../../components/parts-circle/parts-circle.component";
import { PartsSectionContainer, PartsKolo, PartsDesc } from './parts-section.style';

const PartsSection = () => {
    return (
        <PartsSectionContainer>
            <PartsCircle />
            <PartsDesc />
        </PartsSectionContainer>
    )
}

export default PartsSection;