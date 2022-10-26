import React from "react";

import DailyAdd from "../daily-add/daily-add.component";
import { QuestDailyContainer, QuestDailyDatas, QuestDay } from './quest-daily.style';

const QuestDaily = ({ createdTime, data }) => {
    return (
        <QuestDailyContainer>
            <p className="quest-time">{createdTime} 24.10.2022</p>
            <QuestDailyDatas>
                {
                    data[0] &&
                    data.map(day =>
                        <DailyAdd key={day.id} data={day} />)
                }
            </QuestDailyDatas>
        </QuestDailyContainer>
    )
}

export default QuestDaily;