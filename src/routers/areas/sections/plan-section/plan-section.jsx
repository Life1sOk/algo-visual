import React, { memo } from "react";

import { useDispatch, useSelector } from "react-redux";
import { oneActive, twoActive, threeActive, selectSlideOne, selectSlideTwo, selectSlideThree, selectSlidesCount } from "../../../../App/slices/quest-slides";
import { selectCreateQuest } from "../../../../App/slices/create-quest.slice";
import { addNewQuest } from "../../../../App/slices/areas-slice";

import { PlanSectionContainer, PlanNavigation, NavButton, BigButton } from './plan-section.style';
import SlideQuestOne from "../../components/slide-quest-one/slide-quest-one.component";
import SlideQuestTwo from "../../components/slide-quest-two/slide-quest-two.component";
import SlideQuestThree from "../../components/slide-quest-three/slide-quest-three.component";

const PlanSection = memo(({ title, part }) => {
    const dispatch = useDispatch();

    const currentQuest = useSelector(selectCreateQuest);
    const oneState = useSelector(selectSlideOne);
    const twoState = useSelector(selectSlideTwo);
    const threeState = useSelector(selectSlideThree);
    const slidesCount = useSelector(selectSlidesCount);

    const oneSlideChangeHandler = () => dispatch(oneActive());
    const twoSlideChangeHandler = () => dispatch(twoActive());
    const threeSlideChangeHandler = () => dispatch(threeActive());

    const readyHandler = () => {
        if (slidesCount === 3) {
            dispatch(addNewQuest({ part, title, quest: currentQuest }));
            console.log('ready', part, title);
        } else {
            console.log('not all done', currentQuest);
        }
    }

    return (
        <PlanSectionContainer>
            <SlideQuestOne />
            <SlideQuestTwo />
            <SlideQuestThree />
            <PlanNavigation>
                <h2>Menu-navigation</h2>
                <NavButton active={oneState?.active} done={oneState?.done} onClick={oneSlideChangeHandler}>Main</NavButton>
                <NavButton active={twoState?.active} done={twoState?.done} onClick={twoSlideChangeHandler}>Points</NavButton>
                <NavButton active={threeState?.active} done={threeState?.done} onClick={threeSlideChangeHandler}>Daily</NavButton>
                <BigButton onClick={readyHandler}>Ready To Go</BigButton>
            </PlanNavigation>
        </PlanSectionContainer>
    )
})

export default PlanSection;