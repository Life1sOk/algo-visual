import React, { useState } from "react";

// Component Style //
import TodoCardStyle from './index.style';

import Todo from "./todo/todo.component";
import Spinner from "../../../../Components/spinner/spinner.component";

// {
//     state === 'loading' ?
//         <Spinner />
//         :
//         state === 'resolved' ?
//             quests?.map(quest =>
//                 <Todo key={quest.id} index={quest.id + 1} quest={quest} color={color} currentQuest={currentQuest} setCurrentQuest={setCurrentQuest} />
//             )
//             :
//             state === 'rejected' ?
//                 <div>Error...</div>
//                 :
//                 null
// }

const TodoCard = ({ title, color, quests, state }) => {
    const [currentQuest, setCurrentQuest] = useState(null);

    return (
        <TodoCardStyle color={color}>
            <TodoCardStyle.Title color={color}>{title}</TodoCardStyle.Title>
                {   
                    quests?.length > 0 ?
                    quests?.map(quest => <Todo key={quest.id} index={quest.id + 1} quest={quest} color={color} currentQuest={currentQuest} setCurrentQuest={setCurrentQuest} />)
                    :
                    <TodoCardStyle.NothingInHere>Nothing to do</TodoCardStyle.NothingInHere>
                }
            <TodoCardStyle.Bar>Progress bar</TodoCardStyle.Bar>
        </TodoCardStyle>
    )
}

export default TodoCard;