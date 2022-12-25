import React, { useState, useEffect } from "react";

import { TimerContainer, QuestContainer, Percent } from "./timre-quest.style";
import Timer from "../../timer/timer.component";

const TimerQuest = ({deadline, createdTime}) => {
    const [ openInfo, setOpenInfo ] = useState(0);

    const takePercent = (have) => setOpenInfo(have);

    // useEffect(() => {
    //     console.log(openInfo);
    // }, [openInfo])

    return(
        <QuestContainer>
            <Percent>{Math.round(openInfo)}%</Percent>
            <TimerContainer>
                <Timer deadline={deadline} createdTime={createdTime} setTime={takePercent}/>
            </TimerContainer>
        </QuestContainer>
    )
}

export default TimerQuest;