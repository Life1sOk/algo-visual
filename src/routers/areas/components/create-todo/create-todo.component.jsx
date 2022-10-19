import React, { useState } from "react";

import Input from "../input/input.component";
import TextArea from "../textarea/textarea.component";
import { CreateTodoContainer, TimeContainer } from './create-todo.style';


const CreateTodo = ({ currentPart, sectionTitle }) => {
    const [titleValue, setTitleValue] = useState('');

    const timeChangeHandler = (event) => {
        let date = event.target.value;

        let day = '';
        let month = '';
        let year = '';

        for (let i = 0; i < date.length; i++) {
            if (i < 4) year += date[i];
            if (i === 5 || i === 6) month += date[i];
            if (i === 8 || i === 9) day += date[i];
        }

        let untilDate = `${day}.${month}.${year}`;

        console.log(untilDate);
    };


    return (
        <CreateTodoContainer>
            <Input />
            <TimeContainer>
                <p>Deadline:</p>
                <input type='date' onChange={(e) => timeChangeHandler(e)} />
            </TimeContainer>
            <TextArea type='big' label={false} />
        </CreateTodoContainer>
    )
}

export default CreateTodo;