import React, { memo } from "react"

import { LineContainer } from "./statistic-line.style";

const StatisticLine = memo(({name, data, type, size}) => {
    return(
        <LineContainer type={type} size={size}>
            <span>{name}</span>
            <span>{data}</span>
        </LineContainer>
    )
})

export default StatisticLine;