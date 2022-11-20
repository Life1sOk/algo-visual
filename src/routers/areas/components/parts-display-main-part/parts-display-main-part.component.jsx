import React from "react";

import ColorBall from "../../../../Components/color-ball/color-ball.component";
import { PartsDisplayMainPartContainer, PartsDisplayMainPartTitle, PartsDisplayMainPartTotal, PartsDisplayMainPartDescription } from './parts-display-main-part.style';

const PartsDisplayMainPart = ({ data }) => {
    const { title, description, color, totalQuests } = data;

    return (
        <PartsDisplayMainPartContainer>
            <PartsDisplayMainPartTitle>
                <span>{title}</span>
                <button>D</button>
                <ColorBall color={color} />
            </PartsDisplayMainPartTitle>
            <PartsDisplayMainPartTotal>
                <span>Total quests:</span>
                <span className="totalquest">{totalQuests}</span>
            </PartsDisplayMainPartTotal>
            <PartsDisplayMainPartDescription>
                {description}
            </PartsDisplayMainPartDescription>
        </PartsDisplayMainPartContainer>
    )
}

export default PartsDisplayMainPart;