import React from "react";

import { AreaStatisticContainer, StatisticBlock, QuoteBlock } from './area-statistic.style';
import Quote from "../quote/quote.component";
import StatisticLine from "../../../../Components/statistic-line/statistic-line.component";

// statistic:
// 1) Total parts, 2) Total quests, 3) active quests 4) finished quests

const block = {
    parts: 3,
    quests: {
        total: 10,
        active: 6,
        finished: 4,
        expired: 0,
    },
}

const AreaStatistic = () => {
    return(
        <AreaStatisticContainer>
            <h2>Growth</h2>
            <StatisticBlock>
                <StatisticLine name='Parts' data={block.parts}/>
                <StatisticLine name='Total quests' data={block.quests.total}/>
                <StatisticLine type='active' name='Active quests' data={block.quests.active}/>
                <StatisticLine type='finished' name='Finished quests' data={block.quests.finished}/>
                <StatisticLine type='expired' name='Expired quests' data={block.quests.expired}/>
            </StatisticBlock>
            <QuoteBlock>
                <Quote slide='one'/>
            </QuoteBlock>
        </AreaStatisticContainer>
    )
}

export default AreaStatistic;