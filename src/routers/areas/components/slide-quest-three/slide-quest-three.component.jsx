import React from "react";

import { useSelector } from "react-redux";
import { selectSlideThree } from "../../../../App/slices/quest-slides";

import { SlideSectionContainer } from './slide-quest-three.style';

const SlideQuestThree = () => {
    const slidesState = useSelector(selectSlideThree);
    const { active, done } = slidesState;

    return (
        <SlideSectionContainer active={active}>
            <h2>Hello</h2>
        </SlideSectionContainer>
    )
}

export default SlideQuestThree;