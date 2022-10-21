import React from "react";

import { Ul } from './u-list.style';

const lists = {
    one: [
        `Title - will be visible as the title of the quest.`,
        `Current state - the reference point from where you start your movement.`,
        `Want to - the end point of what you want to achieve.`,
        `Why - why are you doing this? Must be clearly understood.`,
    ],
    two: [
        `Create milestones to track progress.`,
        `Add some explanation.`,
    ],
    three: [
        `Think about what you need to do daily to achieve your goal.`,
        `Remember, there's more to do. Don't overthink.`,
    ],
}

const Ulist = ({ slide }) => {
    return (
        <Ul>
            {
                slide && lists[slide] ? lists[slide].map(ads => <li key={lists[slide].indexOf(ads)}>{ads}</li>) : null
            }
        </Ul>
    )
}

export default Ulist;