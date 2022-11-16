import React, { useEffect } from "react";

import { setAllQuests, setUsersDatasAreas, setAreasParts } from "../../../../utils/firebase/firebase";

import { useDispatch, useSelector } from "react-redux";
import { oneActive, twoActive, threeActive, selectSlideOne, selectSlideTwo, selectSlideThree, selectSlidesCount, resetAll } from "../../../../App/slices/quest-slides";
import { selectCreateQuest, selectCreateQuestState, setOpen, setReset } from "../../../../App/slices/create-quest.slice";
import { selectAuthUid } from "../../../../App/slices/auth.slice";
import { addNewQuest, partsQuestCount, selectDisplaySectionTitle, changePartStatusToReload, selectPartStatus, selectDisplayParts } from "../../../../App/slices/areas-slice";
import { addQuestFromCurrentArea, selectCombinedAll } from "../../../../App/slices/combined-areas.slice";
import { PlanSectionContainer, PlanNavigation, BigButton } from './plan-section.style';
import SlideQuestOne from "../../components/slide-quest-one/slide-quest-one.component";
import SlideQuestTwo from "../../components/slide-quest-two/slide-quest-two.component";
import SlideQuestThree from "../../components/slide-quest-three/slide-quest-three.component";
import NavButtons from "../../components/nav-buttons/nav-buttons.component";
import SlideSwitcher from "../../components/slide-switcher/slide-switcher.component";

const PlanSection = ({ title }) => {
    const dispatch = useDispatch();

    const uid = useSelector(selectAuthUid);
    const currentTitle = useSelector(selectDisplaySectionTitle);
    const partStatus = useSelector(selectPartStatus);

    const combinedAllCount = useSelector(selectCombinedAll)?.length;
    const currentQuestState = useSelector(selectCreateQuestState);
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
            const newQuest = { id: combinedAllCount + 1, title, quest: currentQuest };

            dispatch(addNewQuest(newQuest));
            setUsersDatasAreas(uid, title.toLowerCase(), newQuest);
            dispatch(partsQuestCount({ title: currentQuest.main.part, count: 1 }));

            dispatch(addQuestFromCurrentArea(newQuest));
            setAllQuests(uid, newQuest);

            dispatch(resetAll());
            dispatch(setOpen());
            dispatch(setReset('yes'));
            dispatch(changePartStatusToReload('planload'));
        } else {
            console.log('not all done', currentQuest);
        }
    };

    useEffect(() => {
        if (partStatus === 'planload') {
            setAreasParts(uid, currentTitle.toLowerCase(), selectDisplayParts);
            dispatch(changePartStatusToReload(null));
        }
    }, [partStatus]);

    return (
        <PlanSectionContainer open={currentQuestState}>
            <NavButtons />
            <SlideQuestOne />
            <SlideQuestTwo />
            <SlideQuestThree />
            <PlanNavigation>
                <h2>Menu-navigation</h2>
                <SlideSwitcher name='Main' active={oneState?.active} done={oneState?.done} onClick={oneSlideChangeHandler} />
                <SlideSwitcher name='Points' active={twoState?.active} done={twoState?.done} onClick={twoSlideChangeHandler} />
                <SlideSwitcher name='Daily' active={threeState?.active} done={threeState?.done} onClick={threeSlideChangeHandler} />
                <BigButton onClick={readyHandler}>Ready To Go</BigButton>
            </PlanNavigation>
        </PlanSectionContainer>
    )
}

export default PlanSection;