import React from "react";

import './quest.style.scss';

const Quest = ({ questName }) => {
    return (
        <div className="quest-wrapper">
            <input type="checkbox" />
            <span className="quest">{questName}</span>
        </div>
    )
}

export default Quest;