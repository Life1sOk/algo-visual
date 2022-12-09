import React, {useMemo} from "react";

import { reFormatTime } from "../../../../../Hooks/re-format-date";
import { QuestFixContainer, ButtonsContaint, Title, StatisticContainer } from './quest-fix.style';
import StatisticLine from "../../../../../Components/statistic-line/statistic-line.component";
import Button from "../../../../../Components/button/button.component";

const QuestFix = ({data}) => {
    const { main, achieve, daily, createdTime } = data;

    const createdTimeFormated = useMemo(() => reFormatTime(createdTime), [createdTime]);
    const deadlineFormated = useMemo(() => reFormatTime(main.deadline), [main.deadline]);

    const dailyTotal = daily.length;
    const achieveTotal = achieve.length;


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
                <Button name='Fix' type='fix'/>
                <Button name='Delete' type='delete'/>
            </ButtonsContaint>
        </QuestFixContainer>
    )
}

export default QuestFix;