import React, { memo } from "react";

import { useDispatch } from "react-redux";
import { setOpen } from "../../../../App/slices/create-quest.slice";
import { setReset } from "../../../../App/slices/create-quest.slice";

import { NavButtonsContainer } from './nav-buttons.style';
import ButtonSd from "../../../../Components/button-sd/button-sd.component";

const NavButtons = memo(() => {
    const dispatch = useDispatch();

    const openSlideMenuHandler = () => {
        dispatch(setOpen());
        dispatch(setReset('no'));
    };

    return (
        <NavButtonsContainer>
            <ButtonSd type='fix' />
            <ButtonSd type='shrink' onClick={openSlideMenuHandler} />
        </NavButtonsContainer>
    )
})

export default NavButtons;
