import React, { useState } from "react";

// Component Style //
import TodoCardStyle from './index.style';

import Todo from "./todo/todo.component";
import NothingShow from '../../../../Components/nothing-show/nothing-show.component';
import ProgressBar from "../../../../Components/progress-bar/progress-bar.component";

const TodoCard = ({ title, color, quests, doneChangeHandler, type }) => {
    const [currentQuest, setCurrentQuest] = useState(null);

    return (
        <TodoCardStyle color={color}>
            <TodoCardStyle.Title color={color}>{title}</TodoCardStyle.Title>
                {
                    quests?.map(quest => <Todo key={quest.id} index={quest.id + 1} quest={quest} color={color} currentQuest={currentQuest} setCurrentQuest={setCurrentQuest} doneChangeHandler={doneChangeHandler} type={type}/>)
                }
            <TodoCardStyle.Bar color={color}>
                <ProgressBar achieve={quests}/>
            </TodoCardStyle.Bar>
        </TodoCardStyle>
    )
}

// {   
//     quests?.length > 0 ?
//     quests?.map(quest => <Todo key={quest.id} index={quest.id + 1} quest={quest} color={color} currentQuest={currentQuest} setCurrentQuest={setCurrentQuest} doneChangeHandler={doneChangeHandler} type={type}/>)
//     :
//     <NothingShow name='nothing here' width='100%' height='200px'/>
// }
export default TodoCard;