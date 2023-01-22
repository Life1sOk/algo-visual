import React, { useState } from "react";

// Component Style //
import TodoCardStyle from './index.style';

import Todo from "./todo/todo.component";
import NothingShow from '../../../../Components/nothing-show/nothing-show.component';
import ProgressBar from "../../../../Components/progress-bar/progress-bar.component";

const TodoCard = ({ title, color, quests, doneChangeHandler, type }) => {
    const [currentQuest, setCurrentQuest] = useState(null);

    const parts = [];
    const groups = [];

    for (let i=0; i<quests?.length; i++) {
        if(!parts.includes(quests[i].part)) {
            parts.push(quests[i].part);

            let groupPro = {
                group: quests[i].part,
                color: quests[i].color,
                objects: [quests[i]],
            }

            groups.push(groupPro);
        } else {
            for(let a=0; a<parts.length; a++) {
                if(parts[a] === quests[i].part) groups[a].objects.push(quests[i]);
            }
        }
    };

    return (
        <TodoCardStyle color={color}>
            <TodoCardStyle.Title color={color}>{title}</TodoCardStyle.Title>
               {
                groups.map((group, index) => 
                    <TodoCardStyle.Group key={index} lineColor={group.color}>
                        {
                            group.objects.map(quest => <Todo key={quest.id} index={quest.id + 1} quest={quest} color={color} currentQuest={currentQuest} setCurrentQuest={setCurrentQuest} doneChangeHandler={doneChangeHandler} type={type}/>)
                        }
                    </TodoCardStyle.Group>)
               }
            <TodoCardStyle.Bar color={color}>
                <ProgressBar achieve={quests}/>
            </TodoCardStyle.Bar>
        </TodoCardStyle>
    )
}

// {
//     quests?.map(quest => <Todo key={quest.id} index={quest.id + 1} quest={quest} color={color} currentQuest={currentQuest} setCurrentQuest={setCurrentQuest} doneChangeHandler={doneChangeHandler} type={type}/>)
// }

export default TodoCard;