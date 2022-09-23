import React from "react";
import styled from 'styled-components';

import { useSelector } from "react-redux";
import { selectTomorrow, selectOutOfPlan } from '../../../App/slices/tomorrow.slice';

import QuestCard from "../../../Components/quest-card/quest-card.component";
//----------------- Styled ---------------------//
const DisplaySection = styled.section`
    width: 100%;
    padding: 10px;
    background-color: lightyellow;

    display: flex;
    align-items: flex-start;
    gap: 10px;
`;
//----------------------------------------------//


const MainDisplay = () => {
    const tomorrow = useSelector(selectTomorrow);
    const outOfPlan = useSelector(selectOutOfPlan);

    return (
        <DisplaySection>
            <QuestCard type='Today' color='rgb(224, 62, 26)' quests={tomorrow} />
            <QuestCard type='Out plan' color='rgb(138, 56, 245)' quests={outOfPlan} />
        </DisplaySection>
    )
}

export default MainDisplay;