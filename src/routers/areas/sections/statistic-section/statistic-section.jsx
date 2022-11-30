import React from "react";

// Global style
import { BlockLayout } from "../../../../Global-style/layouts";

import PartsCircle from "../../components/parts-circle/parts-circle.component";
import BlockHat from "../../../../Components/block-hat/block-hat.component";
import { StatisticDisplay } from './statistic-section.style';

const StatisticSection = () => {
    return(
        <StatisticDisplay>
            <PartsCircle />
        </StatisticDisplay>
    )
}

export default StatisticSection;