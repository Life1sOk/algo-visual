import React from "react";

import { QuestDisplayWrapper, QuestDisplayContainer, QuestDisplayButtons } from './quest-display.style';
import QuestMain from "../quest-main/quest-main.component";
import QuestPoints from "../quest-points/quest-points.component";
import QuestDaily from "../quest-daily/quest-daily.component";
import ButtonSd from "../../../../Components/button-sd/button-sd.component";

const QuestDisplay = ({ part }) => {
    const { id, main, createdTime, achieve, daily } = part;

    return (
        <QuestDisplayWrapper>
            <QuestDisplayButtons>
                <ButtonSd type='fix' />
                <ButtonSd type='shrink' />
                <ButtonSd type='delete' />
            </QuestDisplayButtons>
            <QuestDisplayContainer>
                <QuestMain id={id} data={main} />
                <QuestPoints data={achieve} />
                <QuestDaily createdTime={createdTime} data={daily} />
            </QuestDisplayContainer>
        </QuestDisplayWrapper>
    )
}

export default QuestDisplay;