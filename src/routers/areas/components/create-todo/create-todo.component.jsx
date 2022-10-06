import React, { useState } from "react";

import './create-todo.style.scss';

const initialState = {
    name: '',
    description: '',
};

const CreateTodo = () => {
    const [current, setCurrent] = useState(initialState);

    const descriptionChangeHandler = (event) => {
        setCurrent({ ...current, description: event.target.value })
    }

    const nameChangeHandler = (event) => {
        setCurrent({ ...current, name: event.target.value })
    }

    return (
        <div className="create-todo-container">
            <h2 className="title">CreateTodo</h2>
            <input className="input" placeholder="Current Goal Title" onChange={(e) => nameChangeHandler(e)} />
            <textarea placeholder="Current Goal Description" onChange={(e) => descriptionChangeHandler(e)} />
            <div className="footer">
                <button onClick={() => console.log(current)}>Add</button>
                <button>Clear</button>
            </div>
        </div>
    )
}

export default CreateTodo;