import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { selectAuthUid } from "../../App/slices/auth.slice";
import { partsQuestCount } from "../../App/slices/areas-slice";
import { doneQuest } from "../../App/slices/combined-areas.slice";

import { QuestStyle } from './index.style';
import About from './about/about.component';
import Points from './points/points.component';
import Daily from "./daily/daily.component";
import TimerQuest from "./timer-quest/timer-quest.component";

const Quest = ({ currentQuest, index, activeType }) => {
    const { id, quest, title } = currentQuest
    const { main, achieve, daily } = quest;
    const dispatch = useDispatch();
    const uid = useSelector(selectAuthUid);

    const transferQuestHandler = (from, to) => {
        const payloadQuest = { id, uid, from, to};
        const payloadPart = { title: main.part, count: -1, uid, area: title }

        dispatch(partsQuestCount(payloadPart))
        dispatch(doneQuest(payloadQuest));
    };

    return (
        <>
            {
                activeType === 'done' ?
                <About data={main} area={title} achieve={achieve} index={index} transferQuestHandler={transferQuestHandler} type='done'/>
                :
                <QuestStyle>
                    <About data={main} area={title} achieve={achieve} index={index} transferQuestHandler={transferQuestHandler}/>
                    <Points data={achieve} questIndex={index} currentQuest={currentQuest}/>
                    <Daily data={daily} title={main.title} part={main.part} area={title} mainColor={main.color}/>
                    {
                        activeType === 'active' &&
                        <TimerQuest deadline={main.deadline} transferQuestHandler={transferQuestHandler}/>
                    }
                </QuestStyle>
            }
        </>
    )
}

export default Quest;