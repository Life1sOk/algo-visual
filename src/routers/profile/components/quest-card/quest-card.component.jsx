import React from "react";

import { QuestCardContainer, QuestTitle, ProgressBar } from './quest-card.style';
import Quest from "../quest/quest.component";
import Spinner from "../../../../Components/spinner/spinner.component";

const QuestCard = ({ title, color, quests, state }) => {
    return (
        <QuestCardContainer color={color}>
            <QuestTitle color={color}>{title}</QuestTitle>
            {
                state === 'loading' ?
                    <Spinner />
                    :
                    state === 'resolved' ?
                        quests &&
                        quests.map(quest =>
                            <Quest key={quest.id} quest={quest} color={color} />
                        )
                        :
                        state === 'rejected' ?
                            <div>Error...</div>
                            :
                            null

            }
            <ProgressBar>Progress bar</ProgressBar>
        </QuestCardContainer>
    )
}

export default QuestCard;