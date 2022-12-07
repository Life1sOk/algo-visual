import React from "react";

import { SettingMenuStyle, MenuSwitcher,BottomHat } from './setting-menu.style';

const SettingMenu = () => {
    return(
        <>
            <SettingMenuStyle>
                <MenuSwitcher>Add</MenuSwitcher>
                <MenuSwitcher>Fix</MenuSwitcher>
            </SettingMenuStyle>
            <BottomHat />
        </>
    )
}

export default SettingMenu;