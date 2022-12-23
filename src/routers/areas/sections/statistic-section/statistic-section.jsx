import React from "react";

// Global style

import PartsCircle from "../../components/parts-circle/parts-circle.component";
import AreaStatistic from "../../components/area-statistic/area-statistic.component";
import { StatisticDisplay } from './statistic-section.style';

const StatisticSection = ({areaStatistic}) => {
    return(
        <StatisticDisplay>
            <AreaStatistic areaStatistic={areaStatistic}/>
            <PartsCircle />
        </StatisticDisplay>
    )
}

export default StatisticSection;