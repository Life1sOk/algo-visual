import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import { updateAllQuests, updateAreasPartsCircle, deleteQuestCombined } from "../../../../../utils/firebase/firebase";
import { oneActive, twoActive, threeActive, selectSlideOne, selectSlideTwo, selectSlideThree, selectSlidesCount, resetAll } from "../../../../../App/slices/quest-slides";
import { selectCreateQuest, setReset, selectFixState, fixState, selectOldFixQuest } from "../../../../../App/slices/create-quest.slice";
import { selectAuthUid } from "../../../../../App/slices/auth.slice";
import {  partsQuestCount, selectDisplaySectionTitle, selectCircle, selectAllParts, selectPartStatus, changePartStatusToReload, selectStatistic, selectDisplaySection} from "../../../../../App/slices/areas-slice";
import { addQuestFromCurrentArea, selectCombinedAll } from "../../../../../App/slices/combined-areas.slice";

import {PlanNavigation, BigButton} from './create-progress.style';
import SlideSwitcher from "../slide-switcher/slide-switcher.component";

const CreateProgress = () => {
    const dispatch = useDispatch();
    const uid = useSelector(selectAuthUid);
    const currentAreaTitle = useSelector(selectDisplaySectionTitle);

    const fixStatus = useSelector(selectFixState);
    const oldQuestData = useSelector(selectOldFixQuest); 

    const combinedAllCount = useSelector(selectCombinedAll)?.length;
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

    const fixedHandler = () => {
        const { id, quest, title } = oldQuestData;
        const newQuest = { id, title, quest: {...currentQuest, createdTime: quest.createdTime } };

        deleteQuestCombined(uid, oldQuestData);
        updateAllQuests(uid, newQuest);

        dispatch(fixState(false));
    };

    useEffect(() => {
        if (partStatus === 'reload') {
            updateAreasPartsCircle(uid, currentAreaTitle.toLowerCase(), currentArea);
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