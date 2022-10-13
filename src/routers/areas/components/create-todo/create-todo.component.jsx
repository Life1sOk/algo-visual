import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { selectQuest, nameHandler, createdTimeHandler, untilTimeHandler, addNewItem, selectNeedForAchive } from "../../../../App/slices/create-quest.slice";
import { addNewQuest, changeStatusToReload } from "../../../../App/slices/areas-slice";

import './create-todo.style.scss';
import CreateInput from "../create-input/create-input.component";


const CreateTodo = ({ currentPart, sectionTitle }) => {
    const dispatch = useDispatch();
    const main = useSelector(selectQuest);
    const mainArray = useSelector(selectNeedForAchive);

    const nameChangeHandler = (event) => dispatch(nameHandler(event.target.value));
    const createdTimeChangeHandler = () => {
        const date = new Date();

        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();

        let currentDate = `${day}.${month}.${year}`;

        dispatch(createdTimeHandler(currentDate));
    }
    const untilTimeChangeHandler = (event) => {
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

        dispatch(untilTimeHandler(untilDate));
    }
    const addNewItemHandler = () => dispatch(addNewItem());

    // const addNewQuestHandler = () => {
    //     dispatch(addNewQuest({ part: currentPart, title: sectionTitle, quest: current }));
    //     dispatch(changeStatusToReload());
    // }

    return (
        <div className="create-todo-container">
            <h2 className="title">CreateTodo</h2>
            <input className="input" placeholder="Current Goal Title" onChange={(e) => nameChangeHandler(e)} />
            <div className="time">
                <p>Deadline:</p>
                <input type='date' onChange={(e) => untilTimeChangeHandler(e)} />
            </div>
            <div className="main">
                {
                    mainArray?.map(item => <CreateInput key={item.id} item={item} />)
                }
            </div>
            <button onClick={addNewItemHandler}>Add new item</button>
            <div className="footer">
                <button onClick={() => console.log(main)}>Add</button>
                <button onClick={createdTimeChangeHandler}>Clear</button>
            </div>
        </div>
    )
}

export default CreateTodo;