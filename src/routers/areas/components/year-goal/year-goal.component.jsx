import React from "react";

import { useDispatch } from "react-redux";
import { deleteQuest } from "../../../../App/slices/areas-slice";

import { YearGoalContainer, YearGoalTitle, YearGoalText } from './year-goal.style';

const YearGoal = ({ color, goal, currentPart, sectionTitle, setUsersDatasAreasHandler }) => {
    const dispatch = useDispatch();
    const { name, description, id } = goal;

    const deleteQuestHandler = () => {
        dispatch(deleteQuest({ part: currentPart, title: sectionTitle, questId: id }));
        setUsersDatasAreasHandler();
    }

    return (
        <YearGoalContainer color={color}>
            <button onClick={deleteQuestHandler}>X</button>
            <YearGoalTitle color={color}>{name}</YearGoalTitle>
            <YearGoalText readOnly disabled defaultValue={description} />
            <div>Footer</div>
        </YearGoalContainer>
    )
}

export default YearGoal;