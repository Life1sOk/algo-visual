import React from "react";

import { SwitcherContainer } from './switcher.style';

const Switcher = () => {
    return (
        <SwitcherContainer>
            <button className="buttons one">one</button>
            <button className="buttons two">two</button>
            <button className="buttons three">three</button>
        </SwitcherContainer>
    )
}

export default Switcher;