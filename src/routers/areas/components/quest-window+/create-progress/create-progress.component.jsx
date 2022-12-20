import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import { addQuestServer, setAreasPartsCircle, deleteQuestServer } from "../../../../../utils/firebase/firebase";
import { oneActive, twoActive, threeActive, selectSlideOne, selectSlideTwo, selectSlideThree, selectSlidesCount, resetAll } from "../../../../../App/slices/quest-slides";
import { selectCreateQuest, setReset, selectFixState, fixState, selectOldFixQuest, windowHandler } from "../../../../../App/slices/create-quest.slice";
import { selectAuthUid } from "../../../../../App/slices/auth.slice";
import {  partsQuestCount, selectDisplaySectionTitle, selectCircle, selectAllParts, selectPartStatus, changePartStatusToReload, selectStatistic, selectDisplaySection} from "../../../../../App/slices/areas-slice";
import { addQuestFromCurrentArea, fixCurrentQuest, selectCombinedActive } from "../../../../../App/slices/combined-areas.slice";

import {PlanNavigation, BigButton} from './create-progress.style';
import SlideSwitcher from "../slide-switcher/slide-switcher.component";

const CreateProgress = () => {
    const dispatch = useDispatch();
    const uid = useSelector(selectAuthUid);
    const currentAreaTitle = useSelector(selectDisplaySectionTitle);

    const fixStatus = useSelector(selectFixState);
    const oldQuestData = useSelector(selectOldFixQuest); 

    const combinedActiveCount = useSelector(selectCombinedActive)?.length;
    const currentQuest = useSelector(selectCreateQuest);
    const oneState = useSelector(selectSlideOne);
    const twoState = useSelector(selectSlideTwo);
    const threeState = useSelector(selectSlideThree);
    const slidesCount = useSelector(selectSlidesCount);

    const currentArea = useSelector(selectDisplaySection);
    const areasCircleData = useSelector(selectCircle);
    const partStatus = useSelector(selectPartStatus);
    const allParts = useSelector(selectAllParts);
    const partStatistic = useSelector(selectStatistic);

    const oneSlideChangeHandler = () => dispatch(oneActive());
    const twoSlideChangeHandler = () => dispatch(twoActive());
    const threeSlideChangeHandler = () => dispatch(threeActive());

    const readyHandler = () => {
        if (slidesCount === 3) {
            const newQuest = { id: combinedActiveCount + 1, title: currentAreaTitle, quest: {...currentQuest, createdTime: new Date().toJSON().slice(0, 10)} };
            dispatch(partsQuestCount({ title: currentQuest.main.part, count: 1, area: currentAreaTitle }));
            dispatch(addQuestFromCurrentArea(newQuest));
            dispatch(resetAll());
            dispatch(setReset('yes'));
            dispatch(windowHandler(false));
            addQuestServer(uid, newQuest, 'active');

            dispatch(changePartStatusToReload('reload'));
        } else {
            console.log('not all done', currentQuest);
        }
    };

    const fixedHandler = () => {
        const { id, quest, title } = oldQuestData;
        const newQuest = { id, title, quest: {...currentQuest, createdTime: quest.createdTime } };

        deleteQuestServer(uid, oldQuestData, 'active');
        addQuestServer(uid, newQuest, 'active');

        dispatch(fixCurrentQuest(newQuest));
        dispatch(resetAll());
        dispatch(fixState(false));
        dispatch(setReset('yes'));
        dispatch(windowHandler(false));
    };

    useEffect(() => {
        if (partStatus === 'reload') {
            setAreasPartsCircle(uid, currentAreaTitle.toLowerCase(), currentArea, true);
            dispatch(changePartStatusToReload(null));
        }
    }, [partStatus]);

    return(
        <PlanNavigation>
                <SlideSwitcher name='Main' active={oneState?.active} done={oneState?.done} onClick={oneSlideChangeHandler} after/>
                <SlideSwitcher name='Points' active={twoState?.active} done={twoState?.done} onClick={twoSlideChangeHandler} before after/>
                <SlideSwitcher name='Daily' active={threeState?.active} done={threeState?.done} onClick={threeSlideChangeHandler} after/>
                {
                    !fixStatus ? 
                    <BigButton onClick={readyHandler}>Ready To Go</BigButton>
                    :
                    <BigButton onClick={fixedHandler}>Fixed To Go</BigButton>
                }
        </PlanNavigation>
    )
}

export default CreateProgress;