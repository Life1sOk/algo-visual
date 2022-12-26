import React from "react";

import { QuestContainer, TimerWindow } from "./timre-quest.style";
import useTimer from "../../../Hooks/useTimer";

const TimerQuest = ({deadline}) => {

    const { days, hours, minutes, seconds } = useTimer(deadline);

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