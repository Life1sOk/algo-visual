import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import { setAllQuests, setUsersDatasAreas, setAreasParts } from "../../../../../utils/firebase/firebase";
import { oneActive, twoActive, threeActive, selectSlideOne, selectSlideTwo, selectSlideThree, selectSlidesCount, resetAll } from "../../../../../App/slices/quest-slides";
import { selectCreateQuest, setOpen, setReset } from "../../../../../App/slices/create-quest.slice";
import { selectAuthUid } from "../../../../../App/slices/auth.slice";
import { addNewQuest, partsQuestCount, selectDisplaySectionTitle, changePartStatusToReload, selectPartStatus, selectDisplayParts } from "../../../../../App/slices/areas-slice";
import { addQuestFromCurrentArea, selectCombinedAll } from "../../../../../App/slices/combined-areas.slice";

import {PlanNavigation, BigButton} from './menu.style';
import SlideSwitcher from "../slide-switcher/slide-switcher.component";

const Menu = ({title}) => {
    const dispatch = useDispatch();

    const uid = useSelector(selectAuthUid);
    const currentTitle = useSelector(selectDisplaySectionTitle);
    const partStatus = useSelector(selectPartStatus);
    const partsData = useSelector(selectDisplayParts);

    const combinedAllCount = useSelector(selectCombinedAll)?.length;
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
            setAreasParts(uid, currentTitle.toLowerCase(), partsData);
            dispatch(changePartStatusToReload(null));
        }
    }, [partStatus]);

    return(
        <PlanNavigation>
                {/* <h2>Menu-navigation</h2> */}
                <SlideSwitcher name='Main' active={oneState?.active} done={oneState?.done} onClick={oneSlideChangeHandler} />
                <SlideSwitcher name='Points' active={twoState?.active} done={twoState?.done} onClick={twoSlideChangeHandler} />
                <SlideSwitcher name='Daily' active={threeState?.active} done={threeState?.done} onClick={threeSlideChangeHandler} />
                <BigButton onClick={readyHandler}>Ready To Go</BigButton>
        </PlanNavigation>
    )
}

export default Menu;