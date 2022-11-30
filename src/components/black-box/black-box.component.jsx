import React from "react";

import { WindowContainer, BlackBox, Content } from './black-box.style';

const BlackBoxWindow = ({children, handler}) => {
    return(
        <WindowContainer>
            <BlackBox onClick={handler}/>
            <Content>
                {children} 
            </Content>
        </WindowContainer>
    )
}

export default BlackBoxWindow;