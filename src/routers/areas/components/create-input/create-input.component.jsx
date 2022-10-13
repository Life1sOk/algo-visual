import React, { useState, useEffect } from "react";

import { CreateInputContainer, TextArea } from './create-input.style';

const CreateInput = ({ item }) => {
    const { id, status } = item;
    const [text, setText] = useState('');
    const [fixedHeight, setFixHeight] = useState(17);

    // 21 ;
    console.log(text.length)
    useEffect(() => {
        let checker = Number.isInteger(text.length / 21);
        if (checker) {
            setFixHeight(fixedHeight + 22);
        }
    }, [text])

    return (
        <CreateInputContainer>
            <p>{id}.</p>
            <TextArea type='text' placeholder="discription" onChange={(e) => setText(e.target.value)} fixedHeight={fixedHeight} />
            <button>C</button>
            <button>X</button>
        </CreateInputContainer>
    )
}

export default CreateInput;