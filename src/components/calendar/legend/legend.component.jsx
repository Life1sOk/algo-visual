import React from "react";

import { LegendContainer, LegendBox, LegendTitle } from './legend.style';

const Legend = ({data}) => {
    const {status, background, border, title} = data;

    return(
        <LegendContainer>
            <LegendBox background={background} border={border}/>
            <LegendTitle>{title}</LegendTitle>
        </LegendContainer>
    )
}

export default Legend;