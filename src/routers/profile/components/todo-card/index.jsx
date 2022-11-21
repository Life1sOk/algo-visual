import React, { useState } from "react";

// Component Style //
import TodoCardStyle from './index.style';

import Todo from "./todo/todo.component";
import Spinner from "../../../../Components/spinner/spinner.component";

const TodoCard = ({ title, color, quests, state }) => {
    const [currentQuest, setCurrentQuest] = useState(null);

    return (
        <TodoCardStyle color={color}>
            <TodoCardStyle.Title color={color}>{title}</TodoCardStyle.Title>
            {
                state === 'loading' ?
                    <Spinner />
                    :
                    state === 'resolved' ?
                        quests &&
                        quests.map(quest =>
                            <Todo key={quest.id} index={quest.id + 1} quest={quest} color={color} currentQuest={currentQuest} setCurrentQuest={setCurrentQuest} />
                        )
                        :
                        state === 'rejected' ?
                            <div>Error...</div>
                            :
                            null
            }
            <TodoCardStyle.Bar>Progress bar</TodoCardStyle.Bar>
        </TodoCardStyle>
    )
}

export default TodoCard;