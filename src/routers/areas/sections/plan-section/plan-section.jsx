import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { oneActive, twoActive, threeActive, selectSlideOne, selectSlideTwo, selectSlideThree, selectSlidesCount } from "../../../../App/slices/quest-slides";
import { selectCreateQuest } from "../../../../App/slices/create-quest.slice";
import { addNewQuest } from "../../../../App/slices/areas-slice";

import { PlanSectionContainer, PlanNavigation, BigButton } from './plan-section.style';
import SlideQuestOne from "../../components/slide-quest-one/slide-quest-one.component";
import SlideQuestTwo from "../../components/slide-quest-two/slide-quest-two.component";
import SlideQuestThree from "../../components/slide-quest-three/slide-quest-three.component";
import NavButtons from "../../components/nav-buttons/nav-buttons.component";
import SlideSwitcher from "../../components/slide-switcher/slide-switcher.component";

const PlanSection = ({ title, part }) => {
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);

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
        <PlanSectionContainer open={open}>
            <NavButtons open={open} setOpen={setOpen} />
            <SlideQuestOne />
            <SlideQuestTwo />
            <SlideQuestThree />
            <PlanNavigation>
                <h2>Menu-navigation</h2>
                <SlideSwitcher name='Add new quest' active={oneState?.active} done={oneState?.done} onClick={oneSlideChangeHandler} />
                <SlideSwitcher name='Points' active={twoState?.active} done={twoState?.done} onClick={twoSlideChangeHandler} />
                <SlideSwitcher name='Daily' active={threeState?.active} done={threeState?.done} onClick={threeSlideChangeHandler} />
                <BigButton onClick={readyHandler}>Ready To Go</BigButton>
            </PlanNavigation>
        </PlanSectionContainer>
    )
}

export default PlanSection;