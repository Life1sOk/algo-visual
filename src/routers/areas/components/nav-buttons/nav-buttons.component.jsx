import React, { memo } from "react";

import { NavButtonsContainer } from './nav-buttons.style';
import ButtonSd from "../../../../Components/button-sd/button-sd.component";

const NavButtons = memo(({ open, setOpen }) => {

    const openSLideMenuHandler = () => setOpen(!open);

    return (
        <NavButtonsContainer>
            <ButtonSd type='fix' />
            <ButtonSd type='shrink' onClick={openSLideMenuHandler} />
        </NavButtonsContainer>
    )
})

export default NavButtons;
