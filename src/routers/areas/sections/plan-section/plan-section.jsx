import React from "react";

import { PlanSectionContainer, PlanNavigation } from './plan-section.style';
// import SlideQuestOne from "../../components/slide-quest-one/slide-quest-one.component";
import SlideQuestTwo from "../../components/slide-quest-two/slide-quest-two.component";

const PlanSection = () => {

    return (
        <PlanSectionContainer>
            {/* <SlideQuestOne /> */}
            <SlideQuestTwo />
            <PlanNavigation>
                <h2>Menu-navigation</h2>
                <button>One</button>
                <button>Two</button>
                <button>Three</button>
            </PlanNavigation>
        </PlanSectionContainer>
    )
}

export default PlanSection;