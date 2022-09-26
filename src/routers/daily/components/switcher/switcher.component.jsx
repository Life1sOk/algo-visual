import React, { useState } from "react";

import { SwitcherContainer, Button } from './switcher.style';

const Switcher = ({ setDisplay, colors }) => {
    const { red, purple, orange } = colors;
    const [on, setOn] = useState(false);

    const switchHanlder = (type) => {
        setDisplay(type);
        setOn(!on);
    }

    return (
        <SwitcherContainer>
            <Button on={on} color={red} type='left' onClick={() => switchHanlder('main')}>Main</Button>
            <Button on={on} color={purple} type='middle' onClick={() => switchHanlder('out')}>Out</Button>
            <Button on={on} color={orange} type='right' onClick={() => switchHanlder('notes')}>Notes</Button>
        </SwitcherContainer>
    )
}

export default Switcher;