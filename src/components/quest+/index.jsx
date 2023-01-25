import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { selectAuthUid } from "../../App/slices/auth.slice";
import { partsQuestCount } from "../../App/slices/areas-slice";
import { doneQuest } from "../../App/slices/combined-areas.slice";

import { QuestStyle, QuestMain } from './index.style';

import QuestCard from "./sections/quest-card/quest-card.section";
import About from './about/about.component';
import Points from './points/points.component';
import Daily from "./daily/daily.component";
import TimerQuest from "./timer-quest/timer-quest.component";
import BlackBoxWindow from "../black-box/black-box.component";

const Quest = ({ currentQuest, index, activeType }) => {
    const [openFull, setOpenFull] = useState(false);

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

    const openFullHandler = () => {
        setOpenFull(!openFull);
    }

    return (
        <>
            <QuestCard direction='column' animation={true} main={main} area={title} achieve={achieve} index={index} color={main.color} openFullHandler={openFullHandler} transferQuestHandler={transferQuestHandler} activeType={activeType}/>
            <BlackBoxWindow handler={openFullHandler} state={openFull}>
                <QuestStyle>
                    <QuestCard direction='raw' main={main} area={title} achieve={achieve} index={index} color={main.color} transferQuestHandler={transferQuestHandler} activeType={activeType}/>
                </QuestStyle>
            </BlackBoxWindow>
        </>
    )
};

export default Quest;