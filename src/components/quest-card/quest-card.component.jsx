import React from "react";

import { QuestCardContainer, QuestTitle, ProgressBar } from './quest-card.style';
import Quest from "../quest/quest.component";
import FixQuest from "../fix-quest/fix-quest.component";
import AddQuest from "../add-quest/add-quest.component";

const QuestCard = ({ title, color, quests, type }) => {
    return (
        <QuestCardContainer color={color}>
            <QuestTitle color={color}>{title}</QuestTitle>
            {type === 'add' ?
                quests &&
                quests.map(quest =>
                    <FixQuest key={quest.id} quest={quest} />
                )
                :
                quests &&
                quests.map(quest =>
                    <Quest key={quest.id} quest={quest} />
                )
            }
            {
                type === 'add' ? <AddQuest /> : <ProgressBar>Progress bar</ProgressBar>
            }
        </QuestCardContainer>
    )
}

export default QuestCard;