import React, { useState, useRef, useEffect } from "react";

import { QuestContainer, QuestWrapper, DiscriptionBox, Done, Label } from './quest.style.js';

const Quest = ({ quest, color }) => {
    const { questName, description } = quest;
    const textAreaRef = useRef();
    const [generatedHeight, setGeneratedHeight] = useState(null);
    const [state, setState] = useState(false);
    const [done, setDone] = useState(false);

    useEffect(() => {
        const scrollHeight = textAreaRef.current.scrollHeight;
        setGeneratedHeight(scrollHeight);
    }, []);

    const doneChangeHandler = () => {
        setDone(!done);
        setState(false);
    }

    const stateChangeHandler = () => {
        if (!done) return setState(!state);
    }

    return (
        <QuestWrapper>
            <QuestContainer>
                <Done id="quest" color={color} onClick={doneChangeHandler}>D</Done>
                <Label color={color} htmlFor="quest" onClick={stateChangeHandler} done={done}>{questName}</Label>
            </QuestContainer>
            <DiscriptionBox ref={textAreaRef} state={state} generatedHeight={generatedHeight} readOnly disabled value={description} />
        </QuestWrapper>
    )
}

export default Quest;