import React, { useEffect, useState } from "react";

import { QuestContainer, TimerWindow } from "./timre-quest.style";
import useTimer from "../../../Hooks/useTimer";

const TimerQuest = ({deadline, transferQuestHandler, direction, color}) => {
    const { days, hours, minutes, seconds } = useTimer(deadline);

    useEffect(() => {
        if(days === 0 && hours === 0 && minutes === 0 && seconds === 0) return transferQuestHandler('active', 'expired');
    }, [days, hours, minutes, seconds]);

    let timerObj = [
        {time: days, short: 'd'},
        {time: hours, short: 'h'},
        {time: minutes, short: 'm'},
        {time: seconds, short: 's'},
    ];
    
    return(
        <QuestContainer direction={direction} color={color}>
            {
                timerObj?.map((t, index) => !isNaN(t.time) ? 
                    <TimerWindow key={index} color={color}>{t.time}{t.short}</TimerWindow>
                    :
                    <TimerWindow key={index} color={color}>-{t.short}</TimerWindow>
                )
            }
        </QuestContainer>
    )
}

export default TimerQuest;