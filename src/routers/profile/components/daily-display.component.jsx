import React from "react";
import styled from 'styled-components';

import QuestCard from "../../../Components/quest-card/quest-card.component";
//----------------- Styled ---------------------//
const DisplaySection = styled.section`
    width: 100%;
    padding: 10px;
    background-color: lightyellow;

    display: flex;
    gap: 10px;
`;
//----------------------------------------------//


const DailyDisplay = () => {
    return (
        <DisplaySection>
            <QuestCard type='Daily' color='rgb(224, 62, 26)' />
            <QuestCard type='Out plan' color='rgb(138, 56, 245)' />
            {/* <QuestCard type='Daily' /> */}
        </DisplaySection>
    )
}

export default DailyDisplay;