import React from "react";

import { useDispatch } from "react-redux";
import { addQuest, addQuestOut } from "../../App/slices/tomorrow-red.slice";

import './add-quest.style.scss';

const AddQuest = ({ type }) => {
    const dispatch = useDispatch();

    const addHandler = () => {
        if (type === 'main') dispatch(addQuest());
        if (type === 'out') dispatch(addQuestOut());
    }

    return (
        <div className="addquest-container" onClick={addHandler}>
            <div className="one-line" />
            <div className="two-line" />
        </div>
    )
}

export default AddQuest;