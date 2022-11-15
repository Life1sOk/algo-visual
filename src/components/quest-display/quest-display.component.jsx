import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { selectAuthUid } from "../../App/slices/auth.slice";
import { deleteQuest, partsQuestCount } from "../../App/slices/areas-slice";
import { deleteQuestFromCombined } from "../../App/slices/combined-areas.slice";
import { deleteCurrentQuestCombined, deleteUsersDatasAreas } from "../../utils/firebase/firebase";

import { QuestDisplayWrapper, QuestDisplayContainer, QuestDisplayButtons, QuestDisplayRoadLinks } from './quest-display.style';
import QuestMain from "../quest-main/quest-main.component";
import QuestPoints from "../quest-points/quest-points.component";
import QuestDaily from "../quest-daily/quest-daily.component";
import ButtonSd from "../button-sd/button-sd.component";

const QuestDisplay = ({ title, data, questId, id }) => {
    const { main, createdTime, achieve, daily } = data;
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    const uid = useSelector(selectAuthUid);

    const openChangeHandler = () => setOpen(!open);

    const deleteChangeHandler = () => {
        const currentQuest = { id, title, quest: data };

        dispatch(deleteQuest(currentQuest));
        deleteUsersDatasAreas(uid, title.toLowerCase(), currentQuest);
        dispatch(partsQuestCount({ title: data.main.part, count: -1 }));

        dispatch(deleteQuestFromCombined(currentQuest));
        deleteCurrentQuestCombined(uid, currentQuest);
    };

    return (
        <QuestDisplayWrapper>
            <QuestDisplayRoadLinks>
                <span>{title}</span>
            </QuestDisplayRoadLinks>
            <QuestDisplayButtons>
                <ButtonSd type='fix' />
                <ButtonSd type='shrink' onClick={openChangeHandler} />
                <ButtonSd type='delete' onClick={deleteChangeHandler} />
            </QuestDisplayButtons>
            <QuestDisplayContainer open={open}>
                <QuestMain id={questId} data={main} />
                <QuestPoints data={achieve} questIndex={id - 1} questTitle={title} />
                <QuestDaily createdTime={createdTime} data={daily} />
            </QuestDisplayContainer>
        </QuestDisplayWrapper>
    )
}

export default QuestDisplay;