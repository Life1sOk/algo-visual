import React from "react";

import { useDispatch } from "react-redux";
import { addQuest } from "../../App/slices/tomorrow.slice";

import './add-quest.style.scss';

const AddQuest = () => {
    const dispatch = useDispatch();

    const addHandler = () => {
        dispatch(addQuest())
    }

    return (
        <div className="addquest-container" onClick={addHandler}>
            <div className="one-line" />
            <div className="two-line" />
        </div>
    )
}

export default AddQuest;