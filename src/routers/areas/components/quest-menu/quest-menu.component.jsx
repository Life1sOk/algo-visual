import React from "react";

import { QuestMenuContainer } from './quest-menu.style';

const QuestMenu = ({action}) => {
    return(
        <>
            <p onClick={() => action('active')}>Active</p>
            <p onClick={() => action('done')}>Done</p>
            <p onClick={() => action('expired')}>Expired</p>
        </>
    )
}

export default QuestMenu;