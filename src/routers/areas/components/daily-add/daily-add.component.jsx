import React from "react";

import { DailyAddContainer, DailyAddTitle, DailyAddDescription } from './daily-add.style';

const DailyAdd = ({ data }) => {
    const { title, description } = data;

    console.log(data)

    return (
        <DailyAddContainer>
            <DailyAddTitle>{title}</DailyAddTitle>
            <DailyAddDescription>{description}</DailyAddDescription>
        </DailyAddContainer>
    )
}

export default DailyAdd;