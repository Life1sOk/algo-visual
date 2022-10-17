import React from "react";

import { useSelector } from "react-redux";
import { selectDisplaySection } from "../../../../App/slices/areas-slice";

import { PlanSectionContainer, PlanMenu } from './plan-section.style';

const PlanSection = () => {
    const currentSection = useSelector(selectDisplaySection);
    const { mainColor } = currentSection;

    return (
        <PlanSectionContainer mainColor={mainColor}>
            <PlanMenu></PlanMenu>
        </PlanSectionContainer>
    )
}

export default PlanSection;