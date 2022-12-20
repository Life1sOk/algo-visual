import React, { useEffect } from "react";

import { setAreasPartsCircle } from "../../../../../utils/firebase/firebase";

import { useSelector, useDispatch } from "react-redux";
import { selectDisplaySectionTitle, selectDisplaySection, selectPartStatus, changePartStatusToReload } from "../../../../../App/slices/areas-slice";
import { selectCombinedActive } from "../../../../../App/slices/combined-areas.slice";
import { selectAuthUid } from "../../../../../App/slices/auth.slice";

import QuestFix from "../quest-fix/quest-fix.component";

import {SlideQuestFixContainer} from './slide-quest-fix.style';

const SlideQuestFix = () => {
    const dispatch = useDispatch();
    const uid = useSelector(selectAuthUid);
    const title = useSelector(selectDisplaySectionTitle);
    const currentArea = useSelector(selectDisplaySection);
    const partStatus = useSelector(selectPartStatus);

    const allQuests = useSelector(selectCombinedActive);
    const filteredQuests = allQuests?.filter(quest => quest.title === title);

    useEffect(() => {
        if (partStatus === 'reload') {
            setAreasPartsCircle(uid, title.toLowerCase(), currentArea, true);
            dispatch(changePartStatusToReload(null));
        }
    }, [filteredQuests]);

    return(
        <SlideQuestFixContainer>
            {
                filteredQuests.map((quest, index) => <QuestFix key={index} data={quest} />)
            }
        </SlideQuestFixContainer>
    )
}

export default SlideQuestFix;