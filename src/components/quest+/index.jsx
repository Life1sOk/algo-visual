import React, {useRef, useEffect, useState} from "react";

import {ReactComponent as Splat} from '../../Asset/303394.svg';

import { useDispatch, useSelector } from "react-redux";
import { selectAuthUid } from "../../App/slices/auth.slice";
import { partsQuestCount } from "../../App/slices/areas-slice";
import { doneQuest } from "../../App/slices/combined-areas.slice";

import { QuestStyle, Wrapper, Background, SvgWrapper } from './index.style';

import About from "./about/about.component";
import TimerQuest from "./timer-quest/timer-quest.component";
import StepsSection from "./sections/steps/steps.section";

const Quest = ({ currentQuest, index, activeType }) => {
    const { id, quest, title } = currentQuest
    const { main, steps } = quest;
    const dispatch = useDispatch();
    const uid = useSelector(selectAuthUid);

    const [backgroundActive, setBackgroundActive] = useState(false);

    const splatRefOne = useRef(null)
    const splatRefTwo = useRef(null)

    const transferQuestHandler = (from, to) => {
        const payloadQuest = { id, uid, from, to};
        const payloadPart = { title: main.part, count: -1, uid, area: title }

        dispatch(partsQuestCount(payloadPart))
        dispatch(doneQuest(payloadQuest));
    };

    useEffect(() => {
        splatRefOne.current.style.height = '403.5px'; 
        splatRefOne.current.style.width = '200px'; 
        splatRefOne.current.style.transform =  'rotate(120deg)';
        splatRefOne.current.children[1].style.fill = main.color

        splatRefTwo.current.style.height = '403.5px';
        splatRefTwo.current.style.width = '200px'; 
        splatRefTwo.current.style.transform =  'rotate(-80deg)';
        splatRefTwo.current.children[1].style.fill = main.color;

        setBackgroundActive(true);
    }, [main.color])

    return (
        <QuestStyle color={main.color}>
                <Background state={backgroundActive}>
                    <SvgWrapper type='one'><Splat ref={splatRefOne}/></SvgWrapper>
                    <SvgWrapper type='two'><Splat ref={splatRefTwo}/></SvgWrapper>
                </Background>
            <Wrapper>
            {
                activeType === 'active' &&
                <TimerQuest deadline={main.deadline} transferQuestHandler={transferQuestHandler} direction='raw' color={main.color}/>
            }
            <About data={main} area={title} index={index} steps={steps} transferQuestHandler={transferQuestHandler} color={main.color}/>
            </Wrapper>
            <StepsSection steps={steps} color={main.color} questIndex={index} uid={uid}/>
        </QuestStyle>
    )
};

export default Quest;