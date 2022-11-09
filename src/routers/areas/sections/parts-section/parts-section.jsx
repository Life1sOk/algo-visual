import React from "react";

import PartsCircle from "../../components/parts-circle/parts-circle.component";
import PartsDescription from "../../components/parts-description/parts-description.component";
import { PartsSectionContainer } from './parts-section.style';

const PartsSection = () => {
    return (
        <PartsSectionContainer>
            <PartsDescription />
            <PartsCircle />
        </PartsSectionContainer>
    )
}

export default PartsSection;