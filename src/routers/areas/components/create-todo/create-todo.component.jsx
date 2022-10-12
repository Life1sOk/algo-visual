import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { addNewQuest, changeStatusToReload } from "../../../../App/slices/areas-slice";

import './create-todo.style.scss';

const initialState = {
    type: '',
    name: '',
    description: '',
};

const CreateTodo = ({ currentPart, sectionTitle }) => {
    const dispatch = useDispatch();
    const [current, setCurrent] = useState(initialState);

    const descriptionChangeHandler = (event) => setCurrent({ ...current, description: event.target.value });
    const nameChangeHandler = (event) => setCurrent({ ...current, name: event.target.value });

    const addNewQuestHandler = () => {
        dispatch(addNewQuest({ part: currentPart, title: sectionTitle, quest: current }));
        dispatch(changeStatusToReload());
    }

    return (
        <div className="create-todo-container">
            <h2 className="title">CreateTodo</h2>
            <input className="input" placeholder="Current Goal Title" onChange={(e) => nameChangeHandler(e)} />
            <textarea placeholder="Current Goal Description" onChange={(e) => descriptionChangeHandler(e)} />
            <div className="footer">
                <button onClick={addNewQuestHandler}>Add</button>
                <button>Clear</button>
            </div>
        </div>
    )
}

export default CreateTodo;