import React from "react";

import About from "../../about/about.component";
import TimerQuest from "../../timer-quest/timer-quest.component";

import { QuestCardContainer, CardAnimationWrapper } from './quest-card.style';

const QuestCard = ({ main, area, achieve, index, activeType, transferQuestHandler, openFullHandler, direction, animation}) => {

    const openHandler = () => {
        if(openFullHandler) openFullHandler();
    }

    return(
        <QuestCardContainer color={main.color} onClick={openHandler} direction={direction}>
            <CardAnimationWrapper color={main.color} animation={animation}>
                <About data={main} area={area} achieve={achieve} index={index} transferQuestHandler={transferQuestHandler} color={main.color}/>
            </CardAnimationWrapper>
            {
                activeType === 'active' &&
                <TimerQuest deadline={main.deadline} transferQuestHandler={transferQuestHandler} direction={direction}/>
            }
        </QuestCardContainer>
    )
}

export default QuestCard;