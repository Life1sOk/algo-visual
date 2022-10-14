import React from "react";

import { useDispatch } from "react-redux";
import { deleteQuest } from "../../../../App/slices/areas-slice";

import { YearGoalContainer, YearGoalTitle, GoalItemTime, GoalItemMain } from './year-goal.style';
import ItemsItem from "../items-item/items-item.component";

const YearGoal = ({ color, goal, currentPart, sectionTitle, }) => {
    const dispatch = useDispatch();
    const { id, name, createdTime, untilTime, needForAchive } = goal;

    const deleteQuestHandler = async () => {
        dispatch(deleteQuest({ part: currentPart, title: sectionTitle, questId: id }));
    }

    console.log(goal)

    return (
        <YearGoalContainer color={color}>
            <YearGoalTitle color={color}>{name}</YearGoalTitle>
            <GoalItemTime>
                <p>{createdTime}</p>
                <p>{untilTime}</p>
            </GoalItemTime>
            <GoalItemMain>
                {
                    needForAchive?.map(item => <ItemsItem key={item.id} item={item} />)
                }
            </GoalItemMain>
            <div>
                progres bar
                <button onClick={deleteQuestHandler}>X</button>
            </div>
        </YearGoalContainer>
    )
}

export default YearGoal;