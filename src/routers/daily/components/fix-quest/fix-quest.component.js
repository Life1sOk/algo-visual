import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { remove, accept } from "../../../../App/slices/tomorrow.slice";
import Button from "../button/button.component";

import { FixQuestContainer, FixLabel, TitleInput, TextInput, ButtonWrapper, DoneTitle } from './fix-quest.style';

const FixQuest = ({ quest, order }) => {
    const dispatch = useDispatch();
    const [state, setState] = useState(false);
    const [blank, setBlank] = useState(quest);
    const { id, questName, description } = blank;

    const titleHandler = (event) => {
        setBlank({ ...blank, questName: event.target.value });
    }

    const descriptionHandler = (event) => {
        setBlank({ ...blank, description: event.target.value });
    }

    const acceptHandler = () => {
        if (blank.questName.length < 3) {
            alert('very small quest title, should be 3+ symbols!');
            return;
        } else if (blank.description.length < 10) {
            alert('pls add description!');
            return;
        }
        dispatch(accept(blank));
        setState(!state);
    }

    return (
        <FixQuestContainer state={state}>
            <FixLabel> quest {order + 1} </FixLabel>
            {
                !state ?
                    <TitleInput placeholder="title" id="fix" value={questName}
                        onChange={(e) => titleHandler(e)} />
                    :
                    <DoneTitle>
                        <h3 className="quest-title">{questName}</h3>
                        <Button name='fix' type='yellow' onClick={() => setState(!state)} />
                    </DoneTitle>
            }
            <TextInput state={state} type='text' placeholder="discription" value={description}
                onChange={(e) => descriptionHandler(e)} />
            <ButtonWrapper state={state}>
                <Button name='Accept' type='green' onClick={acceptHandler} />
                <Button name='Clear' type='yellow' onClick={() => setBlank({ id: id, questName: '', description: '' })} />
                <Button name='Delete' type='red' onClick={() => dispatch(remove(id))} />
            </ButtonWrapper>
        </FixQuestContainer>
    )
}

export default FixQuest;