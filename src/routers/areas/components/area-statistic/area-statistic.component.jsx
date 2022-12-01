import React from "react";

import { AreaStatisticContainer, StatisticBlock, QuoteBlock } from './area-statistic.style';
import Quote from "../quote/quote.component";

const AreaStatistic = () => {
    return(
        <AreaStatisticContainer>
            <h2>Growth</h2>
            <StatisticBlock>
                
            </StatisticBlock>
            <QuoteBlock>
                <Quote slide='one'/>
            </QuoteBlock>
        </AreaStatisticContainer>
    )
}

export default AreaStatistic;