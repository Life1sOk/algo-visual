import React, { useState } from "react";

import { QuestDisplayWrapper, QuestDisplayContainer, QuestDisplayButtons, QuestDisplayRoadLinks } from './quest-display.style';
import QuestMain from "../quest-main/quest-main.component";
import QuestPoints from "../quest-points/quest-points.component";
import QuestDaily from "../quest-daily/quest-daily.component";
import ButtonSd from "../../../../Components/button-sd/button-sd.component";

const QuestDisplay = ({ title, part, data }) => {
    const { id, main, createdTime, achieve, daily } = data;
    const [open, setOpen] = useState(false);

    const openChangeHandler = () => setOpen(!open);

    return (
        <QuestDisplayWrapper>
            <QuestDisplayRoadLinks>
                <span>{title}</span>
                <span>{`->`}</span>
                <span>{part}</span>
            </QuestDisplayRoadLinks>
            <QuestDisplayButtons>
                <ButtonSd type='fix' />
                <ButtonSd type='shrink' onClick={openChangeHandler} />
                <ButtonSd type='delete' />
            </QuestDisplayButtons>
            <QuestDisplayContainer open={open}>
                <QuestMain id={id} data={main} />
                <QuestPoints data={achieve} questId={id} />
                <QuestDaily createdTime={createdTime} data={daily} />
            </QuestDisplayContainer>
        </QuestDisplayWrapper>
    )
}

export default QuestDisplay;