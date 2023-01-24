import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { selectWichOne, windowSwitcher } from "../../../../../../App/slices/create-quest.slice";

import { SettingMenuStyle, MenuSwitcher} from './setting-menu.style';

const SettingMenu = () => {
    const dispatch = useDispatch();
    const wichWindow = useSelector(selectWichOne);

    const switchHandler = (wich) => dispatch(windowSwitcher(wich))

    return(
        <SettingMenuStyle>
            <MenuSwitcher onClick={() => switchHandler('Add')} active={wichWindow} title='Add'>Add</MenuSwitcher>
            <MenuSwitcher onClick={() => switchHandler('Fix')} active={wichWindow} title='Fix'>Fix</MenuSwitcher>
        </SettingMenuStyle>
    )
}

export default SettingMenu;