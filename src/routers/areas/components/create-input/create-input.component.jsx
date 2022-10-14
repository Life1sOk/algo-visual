import React, { useState, useRef } from "react";

import { useDispatch } from "react-redux";
import { deleteItem } from "../../../../App/slices/create-quest.slice";

import useAutosizeTextArea from "../../../../Hooks/useAutosizeTextArea";
import { CreateInputContainer, TextArea } from './create-input.style';

const CreateInput = ({ item }) => {
    const dispatch = useDispatch();
    const { id } = item;
    const [value, setValue] = useState('');
    const textAreaRef = useRef();

    useAutosizeTextArea(textAreaRef.current, value);
    const handleChange = (event) => setValue(event.target?.value);

    return (
        <CreateInputContainer>
            <p>{id}.</p>
            <TextArea type='text' placeholder="discription" ref={textAreaRef} onChange={handleChange} />
            <button>R</button>
            <button onClick={() => dispatch(deleteItem(id))}>X</button>
        </CreateInputContainer>
    )
}

export default CreateInput;