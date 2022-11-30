import React from "react";

import ColorBall from "../../../../Components/color-ball/color-ball.component";
import PartStyle from "./part.style";

const Part = ({ data }) => {
    const { title, description, color, totalQuests } = data;

    return (
        <PartStyle>
            <PartStyle.Title>
                <span>{title}</span>
                <ColorBall color={color} />
            </PartStyle.Title>
            <PartStyle.TotalQuests>
                <span>Total quests:</span>
                <span className="totalquest">{totalQuests}</span>
            </PartStyle.TotalQuests>
            <PartStyle.Description>
                {description}
            </PartStyle.Description>
        </PartStyle>
    )
}

export default Part;