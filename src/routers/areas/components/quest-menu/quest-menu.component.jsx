import React from "react";

import { MenuContainer, P } from './quest-menu.style';

const QuestMenu = ({action, type}) => {
    const options = ['Active', 'Done', 'Expired'];

    return(
        <MenuContainer>
            {
                options.map((op, index) => <P active={type === op.toLowerCase()} onClick={() => action(op.toLowerCase())} key={index}>{op}</P>)
            }
        </MenuContainer>
    )
}

export default QuestMenu;