import React, { useRef } from "react";

import { useSelector, useDispatch } from "react-redux";
import { selectWindow, linkOpen, addNewLink } from "../../../../App/slices/links-slice";
import { selectAuthUid } from "../../../../App/slices/auth.slice";

import { LinkWindowContainer, WindowTitle, LinksWrapper, ButtonsContainer } from './link-window.style';
import BlackBoxWindow from "../../../../Components/black-box/black-box.component";
import Input from '../../../../Components/input/input.component';
import ButtonClassic from "../../../../Components/button-classic/button-classic.component";

const LinkWindow = () => {
    const dispatch = useDispatch();
    const linkWindowState = useSelector(selectWindow);
    const uid = useSelector(selectAuthUid);

    const linkNameRef = useRef(null);
    const linkUrlRef = useRef(null);

    const windowChangeHandler = () => dispatch(linkOpen(false));

    const checkHandler = () => {
        console.log(linkNameRef.current.value, linkUrlRef)
    }

    const addNewLinkHandler = () => {
        const linkForm = {
            name: linkNameRef.current.value,
            url: linkUrlRef.current.value,
        }

        if(linkForm.name.length <= 0) return alert('pls add name');
        if(linkForm.url.length <= 0) return alert('pls add url');

        dispatch(addNewLink({uid, data: linkForm}));
    }

    return(
        <BlackBoxWindow state={linkWindowState} handler={windowChangeHandler}>
            <LinkWindowContainer>
                <WindowTitle>Check</WindowTitle>
                <LinksWrapper>
                    <Input label='name' ref={linkNameRef}/>
                    <Input label='URL' ref={linkUrlRef}/>
                </LinksWrapper>
                <ButtonsContainer>
                    <ButtonClassic name={'Cancel'} onClick={checkHandler}/>
                    <ButtonClassic name={'Done'} onClick={addNewLinkHandler}/>
                </ButtonsContainer>
            </LinkWindowContainer>
        </BlackBoxWindow>
    )
}

export default LinkWindow;