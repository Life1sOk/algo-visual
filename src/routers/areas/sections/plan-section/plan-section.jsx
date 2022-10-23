import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { oneActive, twoActive, threeActive, selectSlideOne, selectSlideTwo, selectSlideThree } from "../../../../App/slices/quest-slides";

import { PlanSectionContainer, PlanNavigation, NavButton, BigButton } from './plan-section.style';
import SlideQuestOne from "../../components/slide-quest-one/slide-quest-one.component";
import SlideQuestTwo from "../../components/slide-quest-two/slide-quest-two.component";
import SlideQuestThree from "../../components/slide-quest-three/slide-quest-three.component";

const PlanSection = () => {
    const dispatch = useDispatch();
    const oneState = useSelector(selectSlideOne);
    const twoState = useSelector(selectSlideTwo);
    const threeState = useSelector(selectSlideThree);

    const oneSlideChangeHandler = () => dispatch(oneActive());
    const twoSlideChangeHandler = () => dispatch(twoActive());
    const threeSlideChangeHandler = () => dispatch(threeActive());

    return (
        <PlanSectionContainer>
            <SlideQuestOne />
            <SlideQuestTwo />
            <SlideQuestThree />
            <PlanNavigation>
                <h2>Menu-navigation</h2>
                <NavButton active={oneState?.active} onClick={oneSlideChangeHandler}>Main</NavButton>
                <NavButton active={twoState?.active} onClick={twoSlideChangeHandler}>Points</NavButton>
                <NavButton active={threeState?.active} onClick={threeSlideChangeHandler}>Daily</NavButton>
                <BigButton>Ready To Go</BigButton>
            </PlanNavigation>
        </PlanSectionContainer>
    )
}

export default PlanSection;