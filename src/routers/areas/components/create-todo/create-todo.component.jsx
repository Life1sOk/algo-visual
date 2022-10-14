import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { selectQuest, nameHandler, createdTimeHandler, untilTimeHandler, addNewItem, selectNeedForAchive, defaultState } from "../../../../App/slices/create-quest.slice";
import { addNewQuest, changeStatusToReload } from "../../../../App/slices/areas-slice";

import { CreateTodoContainer, CardTitle, QuestTitle, TimeContainer, Main, Footer } from './create-todo.style';
import CreateInput from "../create-input/create-input.component";


const CreateTodo = ({ currentPart, sectionTitle }) => {
    const dispatch = useDispatch();
    const main = useSelector(selectQuest);
    const mainArray = useSelector(selectNeedForAchive);
    const [titleValue, setTitleValue] = useState('');
    const [smallToBig, setSmallToBig] = useState(true);

    const nameChangeHandler = (event) => {
        setTitleValue(event.target.value);
        dispatch(nameHandler(event.target.value));
    };

    const createdTimeChangeHandler = () => {
        const date = new Date();

        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();

        let currentDate = `${day}.${month}.${year}`;

        dispatch(createdTimeHandler(currentDate));
    };

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

        dispatch(untilTimeHandler(untilDate));

        createdTimeChangeHandler();
    };

    const addNewItemHandler = () => dispatch(addNewItem());

    const addNewQuestHandler = () => {
        if (titleValue.length <= 0) {
            alert('need title');
        } else {
            dispatch(addNewQuest({ part: currentPart, title: sectionTitle, quest: main }));
            dispatch(changeStatusToReload());
            dispatch(defaultState());
            setTitleValue('');
        }
    }

    return (
        <CreateTodoContainer smallToBig={smallToBig}>
            <CardTitle>CreateTodo</CardTitle>
            <QuestTitle placeholder="Current Goal Title" onChange={(e) => nameChangeHandler(e)} value={titleValue} />
            <TimeContainer>
                <p>Deadline:</p>
                <input type='date' onChange={(e) => timeChangeHandler(e)} />
            </TimeContainer>
            <Main>
                {
                    mainArray?.map(item => <CreateInput key={item.id} item={item} />)
                }
            </Main>
            <Footer>
                <button onClick={addNewItemHandler}>Add new item</button>
                <button onClick={() => setSmallToBig(!smallToBig)}>Make {!smallToBig ? 'bigger' : 'smaller'}</button>
            </Footer>
            <button onClick={addNewQuestHandler}>Add</button>
        </CreateTodoContainer>
    )
}

export default CreateTodo;