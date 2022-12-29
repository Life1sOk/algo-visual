import React, { useState, useRef, useEffect } from "react";

// Component Style //
import TodoStyle from "./todo.style.js";

const Todo = ({ quest, color, currentQuest, setCurrentQuest, index, doneChangeHandler }) => {
    const { questName, description, status, id } = quest;
    const textAreaRef = useRef(null);
    const [generatedHeight, setGeneratedHeight] = useState(null);
    const [state, setState] = useState(false);

    useEffect(() => {
        const scrollHeight = textAreaRef.current.scrollHeight;
        setGeneratedHeight(scrollHeight);
    }, [state]);

    useEffect(() => {
        if (questName === currentQuest) setState(true);
        if (questName !== currentQuest) setState(false);
    }, [currentQuest, questName]);

    const stateChangeHandler = () => {
        if (state) return setCurrentQuest(null);
        setCurrentQuest(questName);
    }

    const doneChanger = () => doneChangeHandler(id, !status);

    return (
        <TodoStyle>
            <TodoStyle.Container state={state}>
                <TodoStyle.Done id="todo" color={color} onClick={doneChanger}>D</TodoStyle.Done>
                <TodoStyle.Title color={color} htmlFor="todo" onClick={stateChangeHandler} done={status}>
                    {questName}
                </TodoStyle.Title>
            </TodoStyle.Container>
            <div onClick={stateChangeHandler}>
                <TodoStyle.Discription ref={textAreaRef} state={state} generatedHeight={generatedHeight} readOnly disabled value={description} index={index}/>
            </div>
        </TodoStyle>
    )
}

export default Todo;