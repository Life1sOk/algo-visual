import React, { useRef } from "react";

import { useDispatch, useSelector } from "react-redux";
import { selectAllParts, changeToAddData, addToAll } from "../../../../App/slices/parts-slice";

import Input from '../input/input.component';
import TextArea from '../textarea/textarea.component';
import PartsBalls from "../parts-balls/parts-balls.component";
import { PartsDisplayAddContainer, PartsDisplayAddLeft, PartsDisplayAddRight } from './parts-display-style';

const PartsDisplayAdd = () => {
    const dispatch = useDispatch();
    const check = useSelector(selectAllParts);

    const newPartTitleRef = useRef(null);
    const newPartDescriptionRef = useRef(null);

    const addNewPartHandler = () => {
        const newPart = {
            title: newPartTitleRef.current.value,
            description: newPartDescriptionRef.current.value
        }

        dispatch(changeToAddData(newPart));
        dispatch(addToAll());
    }

    const checkHandler = () => {
        console.log(check)
    }

    return (
        <PartsDisplayAddContainer>
            <PartsDisplayAddLeft>
                <Input label="Part's title:" ref={newPartTitleRef} />
                <PartsBalls />
                <TextArea type='big' label="What is it about?" ref={newPartDescriptionRef} />
                <button onClick={addNewPartHandler}>Accept and Add</button>
                <button onClick={checkHandler}>Check</button>
            </PartsDisplayAddLeft>
            <PartsDisplayAddRight>
                <h2>Existing parts:</h2>
                <div className="bla" />
                <div className="bla" />
                <div className="bla" />
                <div className="bla" />
            </PartsDisplayAddRight>
        </PartsDisplayAddContainer>
    )
}

export default PartsDisplayAdd;