import React from "react";

import { LegendContainer, LegendBox, LegendTitle, LegendStar } from './legend.style';

const Legend = ({data}) => {
    const { background, border, title, star } = data;

    return(
        <LegendContainer>
            {
                star ? <LegendStar color={star}/> :
                <LegendBox background={background} border={border}/>
            }
            <LegendTitle>{title}</LegendTitle>
        </LegendContainer>
    )
}

export default Legend;