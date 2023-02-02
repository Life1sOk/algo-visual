import React from "react";

// Global components
import Input from "../../../../Components/input/input.component";
import TextArea from "../../../../Components/textarea/textarea.component";

// Page components
import Deadline from "../../components/deadline/deadline.component";
import PartsOption from "../../../areas/components/quest-window+/components/parts-option/parts-option.component";
import Node from "../../../areas/components/quest-window+/components/node/node.component";
import Ulist from "../../../areas/components/quest-window+/components/u-list/u-list.component";
import TitleSection from "../../components/title-section/title-section.component";

import { SectionWrapper } from "../../goal-layout";
import { FrontCardContainer, FlexBetweenWrapper, GoalMain } from './set-goal.style';

const SetGoalSection = () => {
    return(
        <SectionWrapper>
            <TitleSection title='Set your goal:'/>
            <Node />
            <GoalMain>
                <FrontCardContainer>
                    <FlexBetweenWrapper>
                        <Deadline />
                        <PartsOption options={[]}/>
                    </FlexBetweenWrapper>
                    <Input label='Your goal:'/>
                    <TextArea type='big' label='Make it more specific'/>
                    <TextArea type='big' label='Why?'/>
                </FrontCardContainer>
                <Ulist slide='one' />
            </GoalMain>
        </SectionWrapper>
    )
};

export default SetGoalSection;