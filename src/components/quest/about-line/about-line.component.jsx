import React from "react";

import LineStyle from "./about-line.style";

const Line = ({label, description}) => {
    console.log(description)

    return(
        <LineStyle>
            <LineStyle.Label>{label}</LineStyle.Label>
            <LineStyle.Description>{description}</LineStyle.Description>
        </LineStyle>
    )
}

export default Line;