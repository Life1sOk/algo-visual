import React, { useState, useRef, useEffect } from "react";

import { QuestContainer, Done, Label } from './quest.style.js';
import QuestStyle from "./quest.style.js";

const Quest = ({ quest, color, currentQuest, setCurrentQuest }) => {
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
        <QuestStyle>
            <QuestContainer state={state}>
                <Done id="quest" color={color} onClick={doneChangeHandler}>D</Done>
                <Label color={color} htmlFor="quest" onClick={stateChangeHandler} done={done}>{questName}</Label>
            </QuestContainer>
            <div onClick={stateChangeHandler}>
                <QuestStyle.Discription ref={textAreaRef} state={state} generatedHeight={generatedHeight} readOnly disabled value={description} />
            </div>
        </QuestStyle>
    )
}

export default Quest;