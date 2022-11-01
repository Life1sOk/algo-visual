import React from "react";

import { useDispatch } from "react-redux";
import { addQuest } from "../../App/slices/daily.slice";

import DailyAdd from "../daily-add/daily-add.component";
import { QuestDailyContainer, QuestDailyDatas, QuestDailyButton } from './quest-daily.style';

const QuestDaily = ({ createdTime, data, title }) => {
    const dispatch = useDispatch();

    const addAllToDailyHandler = () => {
        for (let i = 0; i < data.length; i++) {
            const { questName } = data[i];
            dispatch(addQuest({ ...data[i], questName: `${title} - ${questName}` }))
        }
    };

    return (
        <QuestDailyContainer>
            <QuestDailyButton>
                <button onClick={addAllToDailyHandler}>Add All Daily</button>
            </QuestDailyButton>
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