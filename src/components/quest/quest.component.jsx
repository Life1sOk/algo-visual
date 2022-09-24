import React, { useState } from "react";

import { QuestContainer, QuestWrapper, DiscriptionBox } from './quest.style.js';

const Quest = ({ quest }) => {
    const { questName, description } = quest;
    const [state, setState] = useState(false);

    return (
        <QuestWrapper>
            <QuestContainer>
                <input type="checkbox" />
                <h3 className="quest" onClick={() => setState(!state)}>{questName}</h3>
            </QuestContainer>
            <DiscriptionBox state={state}>{description}</DiscriptionBox>
        </QuestWrapper>
    )
}

export default Quest;