import React from "react";

import { QuestStyle } from './index.style';
import About from './about/about.component';
import Points from './points/points.component';
import Daily from "./daily/daily.component";

const Quest = ({ page, title, data, questId, id }) => {
    const { main, createdTime, achieve, daily } = data;

    return (
            <QuestStyle>
                <About id={questId} data={main} area={title}/>
                <Points data={achieve} questIndex={id - 1} questTitle={title} />
                <Daily createdTime={createdTime} data={daily} title={main.title} />
            </QuestStyle>
    )
}

export default Quest;