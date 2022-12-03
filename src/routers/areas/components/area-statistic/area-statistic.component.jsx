import React from "react";

import { useSelector } from "react-redux";
import { selectStatistic, selectDisplaySectionTitle } from "../../../../App/slices/areas-slice";

import { AreaStatisticContainer, StatisticBlock, QuoteBlock } from './area-statistic.style';
import Quote from "../quote/quote.component";
import StatisticLine from "../../../../Components/statistic-line/statistic-line.component";

const AreaStatistic = () => {
    const {parts, quests} = useSelector(selectStatistic);
    const title = useSelector(selectDisplaySectionTitle);

    return(
        <AreaStatisticContainer>
            <h2>{title}</h2>
            <StatisticBlock>
                <StatisticLine name='Parts' data={parts}/>
                <StatisticLine name='Total quests' data={quests.total}/>
                <StatisticLine type='active' name='Active quests' data={quests.active}/>
                <StatisticLine type='finished' name='Finished quests' data={quests.finished}/>
                <StatisticLine type='expired' name='Expired quests' data={quests.expired}/>
            </StatisticBlock>
            <QuoteBlock>
                <Quote slide='one'/>
            </QuoteBlock>
        </AreaStatisticContainer>
    )
}

export default AreaStatistic;