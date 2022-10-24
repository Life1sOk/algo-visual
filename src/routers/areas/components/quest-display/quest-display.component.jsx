import React from "react";

import { QuestDisplayContainer } from './quest-display.style';
import QuestMain from "../quest-main/quest-main.component";
import QuestPoints from "../quest-points/quest-points.component";
import QuestDaily from "../quest-daily/quest-daily.component";

const QuestDisplay = ({ part }) => {
    const { id, main, createdTime, achieve, daily } = part;
    console.log(part)

    return (
        <QuestDisplayContainer>
            <QuestMain id={id} data={main} />
            <QuestPoints data={achieve} />
            <QuestDaily createdTime={createdTime} data={daily} />
        </QuestDisplayContainer>
    )
}

export default QuestDisplay;