import React, { useState, useRef } from "react";

import { useDispatch } from "react-redux";
import { remove, accept } from "../../../../../App/slices/daily.slice";
import { removeOut, acceptOut } from "../../../../../App/slices/out-plan.slice";
import Button from "../../button/button.component";

import useAutosizeTextArea from "../../../../../Hooks/useAutosizeTextArea";
import { FixQuestContainer, FixLabel, TitleInput, TextArea, ButtonWrapper, DoneTitle } from './afd-quest.style';

const AfdQuest = ({ quest, order, color, type, changeCountHandler }) => {
    const dispatch = useDispatch();
    const [state, setState] = useState(false);
    const { id, questName, description } = quest;

    const fixTextAreaRef = useRef(null);
    const fixQuestTitleRef = useRef(null);
    const fixQuestDescriptionRef = useRef(null);

    useAutosizeTextArea(fixTextAreaRef.current, description);

    const acceptHandler = () => {
        const blank = {
            id,
            questName: fixQuestTitleRef.current.value,
            description: fixQuestDescriptionRef.current.value,
        };

        if (blank.questName.length < 3) return alert('very small quest title, should be 3+ symbols!');
        if (blank.description.length < 10) return alert('pls add description!');

        if (type === 'main') dispatch(accept(blank));
        if (type === 'out') dispatch(acceptOut(blank));
        setState(!state);
        changeCountHandler('increase');
    }

    const deleteHandler = () => {
        if (type === 'main') dispatch(remove(id));
        if (type === 'out') dispatch(removeOut(id));
    }

    const fixHandler = () => {
        setState(!state)
        changeCountHandler('decrease');
    }

    return (
        <FixQuestContainer state={state} color={color}>
            <FixLabel color={color}> quest {order + 1} </FixLabel>
            {
                !state ?
                    <>
                        <TitleInput placeholder="title" id="fix" defaultValue={questName} ref={fixQuestTitleRef}
                        />
                        <TextArea state={state} type='text' placeholder="discription" defaultValue={description} ref={fixQuestDescriptionRef} />
                        <ButtonWrapper state={state}>
                            <Button name='Accept' color='green' onClick={acceptHandler} />
                            <Button name='Delete' color='red' onClick={deleteHandler} />
                        </ButtonWrapper>
                    </>
                    :
                    <DoneTitle>
                        <span className="quest-title">{questName}</span>
                        <Button name='fix' color='yellow' onClick={fixHandler} />
                    </DoneTitle>
            }
        </FixQuestContainer>
    )
}

export default AfdQuest;