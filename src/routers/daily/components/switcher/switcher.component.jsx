import React, { useState } from "react";

import { SwitcherContainer } from './switcher.style';
import Button from "../daily-card/button/button.component";

const currentRed = {
    red: true,
    purple: false,
    orange: false,
}

const currentPurple = {
    red: false,
    purple: true,
    orange: false,
}

const currentOrange = {
    red: false,
    purple: false,
    orange: true,
}

const Switcher = ({ setDisplay, colors }) => {
    const { red, purple, orange } = colors;
    const [on, setOn] = useState(currentRed);

    const switchHanlder = (type) => {
        setDisplay(type);

        if (type === 'main') setOn(currentRed);
        if (type === 'out') setOn(currentPurple);
        if (type === 'notes') setOn(currentOrange);
    }

    return (
        <SwitcherContainer>
            <Button state={on.red} color={red} type='left' onClick={() => switchHanlder('main')} name='Main' />
            <Button state={on.purple} color={purple} type='middle' onClick={() => switchHanlder('out')} name='Out' />
            <Button state={on.orange} color={orange} type='right' onClick={() => switchHanlder('notes')} name='Notes' />
        </SwitcherContainer>
    )
}

export default Switcher;