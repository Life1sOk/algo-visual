import React, { useState, useRef } from "react";

import useAutosizeTextArea from "../../../../Hooks/useAutosizeTextArea.js";
import { QuestContainer, QuestWrapper, DiscriptionBox, Done, Label } from './quest.style.js';

const Quest = ({ quest, color }) => {
    const { questName, description } = quest;
    const textArea = useRef();
    const [state, setState] = useState(true);
    const [done, setDone] = useState(false);

    useAutosizeTextArea(textArea.current, description);

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
            <DiscriptionBox ref={textArea} state={state} readOnly disabled value={description} />
        </QuestWrapper>
    )
}

export default Quest;