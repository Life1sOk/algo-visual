import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { addQuest } from "../../../App/slices/daily.slice";

import TodoStyle from './todo.style';

const Todo = ({ data, title }) => {
    const dispatch = useDispatch();
    const { questName, description } = data;
    const [open, setOpen] = useState(false);

    const reverseHandler = () => setOpen(!open);
    const sendToDailyPlan = () => dispatch(addQuest({ ...data, questName: `${title} - ${questName}` }));

    return (
        <TodoStyle activate={open}>
            <TodoStyle.Front onClick={reverseHandler} hover={true}>
                <TodoStyle.Title title={questName}>{questName}</TodoStyle.Title>
                <TodoStyle.Description>{description}</TodoStyle.Description>
            </TodoStyle.Front>
            <TodoStyle.Back onClick={reverseHandler}>
                <button onClick={sendToDailyPlan}>Add Daily</button>
            </TodoStyle.Back>
        </TodoStyle>
    )
}

export default Todo;