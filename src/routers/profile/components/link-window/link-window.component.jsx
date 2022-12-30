import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { selectWindow, linkOpen } from "../../../../App/slices/links-slice";

import { LinkWindowContainer, WindowTitle, LinksWrapper, ButtonsContainer } from './link-window.style';
import BlackBoxWindow from "../../../../Components/black-box/black-box.component";
import Input from '../../../../Components/input/input.component';

const LinkWindow = () => {
    const dispatch = useDispatch();
    const linkWindowState = useSelector(selectWindow);

    const windowChangeHandler = () => dispatch(linkOpen(false));

    return(
        <BlackBoxWindow state={linkWindowState} handler={windowChangeHandler}>
            <LinkWindowContainer>
                <WindowTitle>Check</WindowTitle>
                <LinksWrapper>
                    <Input label='name'/>
                    <Input label='URL'/>
                </LinksWrapper>
                <ButtonsContainer>
                    <button>Cancel</button>
                    <button>Done</button>
                </ButtonsContainer>
            </LinkWindowContainer>
        </BlackBoxWindow>
    )
}

export default LinkWindow;