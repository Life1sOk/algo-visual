import React from "react";

import { WindowContainer, BlackBox, Content } from './black-box.style';

const BlackBoxWindow = ({children, handler, state}) => {
    return(
        <WindowContainer state={state}>
            <BlackBox onClick={handler}/>
            <Content>
                {children} 
            </Content>
        </WindowContainer>
    )
}

export default BlackBoxWindow;