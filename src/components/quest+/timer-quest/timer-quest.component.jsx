import React, { useEffect } from "react";

import { QuestContainer, TimerWindow } from "./timre-quest.style";
import useTimer from "../../../Hooks/useTimer";

const TimerQuest = ({deadline, transferQuestHandler}) => {
    const { days, hours, minutes, seconds } = useTimer(deadline);

    useEffect(() => {
        if(days === 0 && hours === 0 && minutes === 0 && seconds === 0) return transferQuestHandler('active', 'expired')
    }, [days, hours, minutes, seconds])

    return(
        <QuestContainer>
            <TimerWindow>{days} d</TimerWindow>
            <TimerWindow>{hours} h</TimerWindow>
            <TimerWindow>{minutes} m</TimerWindow>
            <TimerWindow>{seconds} s</TimerWindow>
        </QuestContainer>
    )
}

export default TimerQuest;