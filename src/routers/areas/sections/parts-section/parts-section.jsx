import React from "react";

import { useSelector } from "react-redux";
import { selectDisplaySection } from "../../../../App/slices/areas-slice";

import { PartsSectionContainer, PartsSectionDisplay } from './parts-section.style';
import AreaParts from "../../components/area-parts/area-parts.component";
import YearGoal from "../../components/year-goal/year-goal.component";

const array = [1, 2, 3, 4, 5, 6, 7, 8];

const PartsSection = () => {
    const currentSection = useSelector(selectDisplaySection);
    const { parts, mainColor } = currentSection;

    return (
        <PartsSectionContainer>
            <AreaParts parts={parts} />
            <PartsSectionDisplay>
                <YearGoal color='red' />
                {
                    array.map(num => <YearGoal color={mainColor} key={num} />)
                }
            </PartsSectionDisplay>
        </PartsSectionContainer>
    )
}

export default PartsSection;