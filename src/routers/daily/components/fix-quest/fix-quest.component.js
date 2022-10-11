import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { remove, accept } from "../../../../App/slices/daily.slice";
import { removeOut, acceptOut } from "../../../../App/slices/out-plan.slice";
import Button from "../button/button.component";

import { FixQuestContainer, FixLabel, TitleInput, TextInput, ButtonWrapper, DoneTitle } from './fix-quest.style';

const FixQuest = ({ quest, order, color, type }) => {
    const dispatch = useDispatch();
    const [state, setState] = useState(false);
    const [blank, setBlank] = useState(quest);
    const { id, questName, description } = blank;

    const titleHandler = (event) => setBlank({ ...blank, questName: event.target.value });
    const descriptionHandler = (event) => setBlank({ ...blank, description: event.target.value });

    const acceptHandler = () => {
        if (blank.questName.length < 3) alert('very small quest title, should be 3+ symbols!');
        if (blank.description.length < 10) alert('pls add description!');

        if (type === 'main') dispatch(accept(blank));
        if (type === 'out') dispatch(acceptOut(blank));
        console.log('check')
        setState(!state);
    }

    const deleteHandler = () => {
        if (type === 'main') dispatch(remove(id));
        if (type === 'out') dispatch(removeOut(id));
    }

    return (
        <FixQuestContainer state={state} color={color}>
            <FixLabel color={color}> quest {order + 1} </FixLabel>
            {
                !state ?
                    <>
                        <TitleInput placeholder="title" id="fix" value={questName}
                            onChange={(e) => titleHandler(e)} />
                        <TextInput state={state} type='text' placeholder="discription" value={description}
                            onChange={(e) => descriptionHandler(e)} />
                        <ButtonWrapper state={state}>
                            <Button name='Accept' color='green' onClick={acceptHandler} />
                            <Button name='Clear' color='yellow' onClick={() => setBlank({ id: id, questName: '', description: '' })} />
                            <Button name='Delete' color='red' onClick={deleteHandler} />
                        </ButtonWrapper>
                    </>
                    :
                    <DoneTitle>
                        <h3 className="quest-title">{questName}</h3>
                        <Button name='fix' color='yellow' onClick={() => setState(!state)} />
                    </DoneTitle>
            }
        </FixQuestContainer>
    )
}

export default FixQuest;