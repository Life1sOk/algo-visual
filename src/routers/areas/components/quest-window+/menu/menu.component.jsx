import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import { updateAllQuests, updateAreasPartsCircle } from "../../../../../utils/firebase/firebase";
import { oneActive, twoActive, threeActive, selectSlideOne, selectSlideTwo, selectSlideThree, selectSlidesCount, resetAll } from "../../../../../App/slices/quest-slides";
import { selectCreateQuest, setReset } from "../../../../../App/slices/create-quest.slice";
import { selectAuthUid } from "../../../../../App/slices/auth.slice";
import {  partsQuestCount, selectDisplaySectionTitle, selectCircle, selectAllParts, selectPartStatus, changePartStatusToReload } from "../../../../../App/slices/areas-slice";
import { addQuestFromCurrentArea, selectCombinedAll } from "../../../../../App/slices/combined-areas.slice";

import {PlanNavigation, BigButton} from './menu.style';
import SlideSwitcher from "../slide-switcher/slide-switcher.component";

const Menu = () => {
    const dispatch = useDispatch();

    const uid = useSelector(selectAuthUid);
    const currentAreaTitle = useSelector(selectDisplaySectionTitle);

    const combinedAllCount = useSelector(selectCombinedAll)?.length;
    const currentQuest = useSelector(selectCreateQuest);
    const oneState = useSelector(selectSlideOne);
    const twoState = useSelector(selectSlideTwo);
    const threeState = useSelector(selectSlideThree);
    const slidesCount = useSelector(selectSlidesCount);

    const areasCircleData = useSelector(selectCircle);
    const partStatus = useSelector(selectPartStatus);
    const allParts = useSelector(selectAllParts);

    const oneSlideChangeHandler = () => dispatch(oneActive());
    const twoSlideChangeHandler = () => dispatch(twoActive());
    const threeSlideChangeHandler = () => dispatch(threeActive());

    const readyHandler = () => {
        if (slidesCount === 3) {
            const newQuest = { id: combinedAllCount + 1, title: currentAreaTitle, quest: {...currentQuest, createdTime: new Date().toJSON().slice(0, 10)} };
            dispatch(partsQuestCount({ title: currentQuest.main.part, count: 1, area: currentAreaTitle }));
            dispatch(addQuestFromCurrentArea(newQuest));
            dispatch(resetAll());
            dispatch(setReset('yes'));
            updateAllQuests(uid, newQuest);

            dispatch(changePartStatusToReload('reload'));
        } else {
            console.log('not all done', currentQuest);
        }
    };

    useEffect(() => {
        if (partStatus === 'reload') {
            const dataToAdd = {
                allParts,
                circle: areasCircleData
            };
            updateAreasPartsCircle(uid, currentAreaTitle.toLowerCase(), dataToAdd);
            dispatch(changePartStatusToReload(null));
        }
    }, [partStatus]);

    return(
        <PlanNavigation>
                <SlideSwitcher name='Main' active={oneState?.active} done={oneState?.done} onClick={oneSlideChangeHandler} after/>
                <SlideSwitcher name='Points' active={twoState?.active} done={twoState?.done} onClick={twoSlideChangeHandler} before after/>
                <SlideSwitcher name='Daily' active={threeState?.active} done={threeState?.done} onClick={threeSlideChangeHandler} after/>
                <BigButton onClick={readyHandler}>Ready To Go</BigButton>
        </PlanNavigation>
    )
}

export default Menu;