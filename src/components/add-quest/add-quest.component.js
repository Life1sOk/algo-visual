import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { remove, accept, clear } from "../../App/slices/tomorrow.slice";

import './add-quest.style.scss';

const AddQuest = ({ quest }) => {
    const [blank, setBlank] = useState(quest);
    const { id, questName, description } = blank;
    const dispatch = useDispatch();

    const titleHandler = (event) => {
        setBlank({ ...blank, questName: event.target.value });
    }

    const descriptionHandler = (event) => {
        setBlank({ ...blank, description: event.target.value });
    }

    return (
        <div className="addquest-container">
            <label htmlFor='add' className="label">
                quest {id}
            </label>
            <input className="add-title input" placeholder="title" id="add" defaultValue={questName}
                onChange={(e) => titleHandler(e)} />
            <textarea className="add-text input" type='text' placeholder="discription" defaultValue={description}
                onChange={(e) => descriptionHandler(e)} />
            <div className="buttons">
                <button className="all green" onClick={() => dispatch(accept(blank))}>Accept</button>
                <button className="all yellow" onClick={() => dispatch(clear(quest.id))}>Clear</button>
                <button className="all red" onClick={() => dispatch(remove(quest))}>Delete</button>
            </div>
        </div>
    )
}

export default AddQuest;