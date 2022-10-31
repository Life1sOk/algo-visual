import React from "react";

import DailyAdd from "../daily-add/daily-add.component";
import { QuestDailyContainer, QuestDailyDatas } from './quest-daily.style';

const QuestDaily = ({ createdTime, data, title }) => {
    return (
        <QuestDailyContainer>
            <QuestDailyDatas>
                {
                    data[0] &&
                    data.map(day =>
                        <DailyAdd key={day.id} data={day} title={title} />)
                }
            </QuestDailyDatas>
        </QuestDailyContainer>
    )
}

export default QuestDaily;