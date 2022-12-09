import React from "react"

import { LineContainer, LineTitle } from "./statistic-line.style";

const StatisticLine = ({name, data, type, size}) => {
    return(
        <LineContainer type={type} size={size}>
            <span>{name}</span>
            <span>{data}</span>
        </LineContainer>
    )
}

export default StatisticLine;