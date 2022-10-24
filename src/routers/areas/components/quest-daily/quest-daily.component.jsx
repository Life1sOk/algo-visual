import React from "react";

import { QuestDailyContainer, QuestDailyDatas, QuestDay } from './quest-daily.style';

const QuestDaily = ({ createdTime, data }) => {
    return (
        <QuestDailyContainer>
            <p className="quest-time">{createdTime} 24.10.2022</p>
            <QuestDailyDatas>
                {
                    data[0] &&
                    data.map(day =>
                        <QuestDay key={day.id}>
                            <h2>{day.title}</h2>
                            <h3>{day.description}</h3>
                        </QuestDay>)
                }
            </QuestDailyDatas>
        </QuestDailyContainer>
    )
}

export default QuestDaily;