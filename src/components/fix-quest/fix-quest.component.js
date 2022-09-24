import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { remove, accept } from "../../App/slices/tomorrow.slice";

import './fix-quest.style.scss';

const FixQuest = ({ quest }) => {
    const dispatch = useDispatch();
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
        dispatch(accept({ type: 'accept', blank }));
    }

    return (
        <div className="fixquest-container">
            <label htmlFor='fix' className="label">
                quest {id}
            </label>
            <input className="add-title input" placeholder="title" id="fix" value={questName}
                onChange={(e) => titleHandler(e)} />
            <textarea className="add-text input" type='text' placeholder="discription" value={description}
                onChange={(e) => descriptionHandler(e)} />
            <div className="buttons">
                <button className="all green" onClick={acceptHandler}>Accept</button>
                <button className="all yellow" onClick={() => setBlank({ id: id, questName: '', description: '' })}>Clear</button>
                <button className="all red" onClick={() => dispatch(remove(id))}>Delete</button>
            </div>
        </div>
    )
}

export default FixQuest;