import React, { useState } from "react";

import { TimerContainer, QuestContainer, Percent } from "./timre-quest.style";
import Timer from "../../timer/timer.component";

const TimerQuest = () => {
    const [ openInfo, setOpenInfo ] = useState(0);

    const takePercent = (have) => setOpenInfo(have);

    return(
        <QuestContainer>
            <Percent>{Math.round(openInfo)}%</Percent>
            <TimerContainer>
                <Timer setTime={takePercent}/>
            </TimerContainer>
        </QuestContainer>
    )
}

export default TimerQuest;