import React from "react";

import { QuestStyle } from './index.style';
import About from './about/about.component';
import Points from './points/points.component';
import Daily from "./daily/daily.component";
import TimerQuest from "./timer-quest/timer-quest.component";

const Quest = ({ page, currentQuest, index }) => {
    const { id, quest, title } = currentQuest
    const { main, createdTime, achieve, daily } = quest;

    return (
            <QuestStyle>
                <About id={id} data={main} area={title} achieve={achieve} index={index}/>
                <Points data={achieve} questIndex={index} currentQuest={currentQuest}/>
                <Daily data={daily} title={main.title} />
                <TimerQuest deadline={main.deadline} createdTime={createdTime}/>
            </QuestStyle>
    )
}

export default Quest;