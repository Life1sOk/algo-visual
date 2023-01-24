import React from "react";

import { AreaStatisticContainer, StatisticBlock, QuoteBlock } from './area-statistic.style';
import Quote from "../quest-window+/components/quote/quote.component";
import StatisticLine from "../../../../Components/statistic-line/statistic-line.component";

const AreaStatistic = ({areaStatistic}) => {
    const { areaTitle, active, done, expired, total, parts } = areaStatistic;

    return(
        <AreaStatisticContainer>
            <h2>{areaTitle}</h2>
            <StatisticBlock>
                <StatisticLine name='Parts' data={parts}/>
                <StatisticLine name='Total quests' data={total}/>
                <StatisticLine type='active' name='Active quests' data={active}/>
                <StatisticLine type='finished' name='Finished quests' data={done}/>
                <StatisticLine type='expired' name='Expired quests' data={expired}/>
            </StatisticBlock>
            <QuoteBlock>
                <Quote slide='one'/>
            </QuoteBlock>
        </AreaStatisticContainer>
    )
}

export default AreaStatistic;