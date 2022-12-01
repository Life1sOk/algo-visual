import React from "react";

// Global style

import PartsCircle from "../../components/parts-circle/parts-circle.component";
import { StatisticDisplay } from './statistic-section.style';

const StatisticSection = () => {
    return(
        <StatisticDisplay>
            <PartsCircle />
        </StatisticDisplay>
    )
}

export default StatisticSection;