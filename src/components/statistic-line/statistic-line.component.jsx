import React from "react"

import { LineContainer, LineTitle } from "./statistic-line.style";

const StatisticLine = ({name, data, type}) => {
    return(
        <LineContainer type={type}>
            <LineTitle>{name}</LineTitle>
            <span>{data}</span>
        </LineContainer>
    )
}

export default StatisticLine;