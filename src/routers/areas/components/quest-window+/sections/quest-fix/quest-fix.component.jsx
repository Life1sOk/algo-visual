import React, { useMemo } from "react";

import { useDispatch, useSelector } from "react-redux";
import { deleteQuestFromCombined } from "../../../../../../App/slices/combined-areas.slice";
import { partsQuestCount } from "../../../../../../App/slices/areas-slice";
import { selectAuthUid } from "../../../../../../App/slices/auth.slice";
import { fixQuest, fixState, windowSwitcher } from "../../../../../../App/slices/create-quest.slice";

import { reFormatTime } from "../../../../../../Hooks/re-format-date";

import { QuestFixContainer, ButtonsContaint, Title, StatisticContainer } from './quest-fix.style';
import StatisticLine from "../../../../../../Components/statistic-line/statistic-line.component";
import Button from "../../../../../../Components/button/button.component";

const QuestFix = ({data}) => {
    const { id, quest, title } = data;
    const { main, achieve, daily, createdTime } = quest;

    const dispatch = useDispatch();
    const uid = useSelector(selectAuthUid);;

    const createdTimeFormated = useMemo(() => reFormatTime(createdTime), [createdTime]);
    const deadlineFormated = useMemo(() => reFormatTime(main.deadline), [main.deadline]);

    const dailyTotal = daily.length;
    const achieveTotal = achieve.length;

    const fixCurrentQuestHandler = () => {
        dispatch(fixQuest(data));
        dispatch(fixState(true));
        dispatch(windowSwitcher('Add'));
    }

    const deleteCurrentQuestHandler = () => {
        dispatch(partsQuestCount({ title: quest.main.part, count: -1, area: title, uid }));
        dispatch(deleteQuestFromCombined({id, uid, data}));
    };

    console.log({ title: quest.main.part, count: -1, area: title, uid })
    
    return(
        <QuestFixContainer>
            <Title>{main.title}</Title>
            <StatisticLine name={createdTimeFormated} data={deadlineFormated} size='S'/>
            <StatisticContainer>
                <StatisticLine name='Part' data={main.part}/>
                <StatisticLine name='Achieve' data={achieveTotal}/>
                <StatisticLine name='Daily' data={dailyTotal}/>
            </StatisticContainer>
            <ButtonsContaint>
                <Button name='Fix' type='fix' onClick={fixCurrentQuestHandler} />
                <Button name='Delete' type='delete' onClick={deleteCurrentQuestHandler}/>
            </ButtonsContaint>
        </QuestFixContainer>
    )
}

export default QuestFix;