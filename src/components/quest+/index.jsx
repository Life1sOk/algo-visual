import React from "react";

import { QuestStyle } from './index.style';
import About from './about/about.component';
import Points from './points/points.component';
import Daily from "./daily/daily.component";
import TimerQuest from "./timer-quest/timer-quest.component";

const Quest = ({ page, title, data, questId, id }) => {
    const { main, createdTime, achieve, daily } = data;

    return (
            <QuestStyle>
                <About id={questId} data={main} area={title} achieve={achieve}/>
                <Points data={achieve} questIndex={id - 1} questTitle={title} />
                <Daily data={daily} title={main.title} />
                <TimerQuest deadline={main.deadline} createdTime={createdTime}/>
            </QuestStyle>
    )
}

export default Quest;