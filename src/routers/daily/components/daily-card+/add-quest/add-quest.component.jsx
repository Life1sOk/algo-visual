import React from "react";

import { useDispatch } from "react-redux";
import { addQuest } from "../../../../../App/slices/daily.slice";

import './add-quest.style.scss';

const AddQuest = ({ type }) => {
    const dispatch = useDispatch();

    const addHandler = () => dispatch(addQuest({type}));

    return (
        <div className="addquest-container" onClick={addHandler}>
            <div className="one-line" />
            <div className="two-line" />
        </div>
    )
}

export default AddQuest;