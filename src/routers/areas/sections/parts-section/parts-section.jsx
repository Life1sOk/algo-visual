import React from "react";

import { PartsSectionContainer, PartsKolo, PartsDesc } from './parts-section.style';

const PartsSection = () => {
    return (
        <PartsSectionContainer>
            <PartsKolo />
            <PartsDesc />
        </PartsSectionContainer>
    )
}

export default PartsSection;