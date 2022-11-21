import React, { useState, useRef, useEffect } from "react";

// Component Style //
import TodoStyle from "./todo.style.js";

const Todo = ({ quest, color, currentQuest, setCurrentQuest, index }) => {
    const { questName, description } = quest;
    const textAreaRef = useRef();
    const [generatedHeight, setGeneratedHeight] = useState(null);
    const [state, setState] = useState(false);
    const [done, setDone] = useState(false);

    useEffect(() => {
        const scrollHeight = textAreaRef.current.scrollHeight;
        setGeneratedHeight(scrollHeight);
    }, []);

    useEffect(() => {
        if (questName === currentQuest) setState(true);
        if (questName !== currentQuest) setState(false);
    }, [currentQuest, questName])

    const doneChangeHandler = () => {
        setDone(!done);
    }

    const stateChangeHandler = () => {
        if (state) return setCurrentQuest(null);
        setCurrentQuest(questName);
    }

    return (
        <TodoStyle>
            <TodoStyle.Container state={state}>
                <TodoStyle.Done id="todo" color={color} onClick={doneChangeHandler}>D</TodoStyle.Done>
                <TodoStyle.Title color={color} htmlFor="todo" onClick={stateChangeHandler} done={done}>
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