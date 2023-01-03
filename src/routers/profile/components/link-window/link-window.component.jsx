import React, { useRef } from "react";

import { useSelector, useDispatch } from "react-redux";
import { selectWindow, linkOpen, addNewLink, selectLinks, deleteLink } from "../../../../App/slices/links-slice";
import { selectAuthUid } from "../../../../App/slices/auth.slice";

import { LinkWindowContainer, WindowTitle, LinksForm, ButtonsContainer, LinksWrapper } from './link-window.style';
import BlackBoxWindow from "../../../../Components/black-box/black-box.component";
import Input from '../../../../Components/input/input.component';
import ButtonClassic from "../../../../Components/button-classic/button-classic.component";
import Link from "../link/link.component";

const LinkWindow = () => {
    const dispatch = useDispatch();
    const linkWindowState = useSelector(selectWindow);
    const uid = useSelector(selectAuthUid);
    const currentLinks = useSelector(selectLinks);

    const linkNameRef = useRef(null);
    const linkUrlRef = useRef(null);

    const cancelHandler = () => {
        dispatch(linkOpen(false));

        linkNameRef.current.value = '';
        linkUrlRef.current.value = '';
    };

    const addNewLinkHandler = () => {
        const linkForm = {
            id: currentLinks.length + 1,
            name: linkNameRef.current.value,
            url: linkUrlRef.current.value,
        }

        if(linkForm.name.length <= 0) return alert('pls add name');
        if(linkForm.url.length <= 0) return alert('pls add url');

        dispatch(addNewLink({uid, data: linkForm}));

        linkNameRef.current.value = '';
        linkUrlRef.current.value = '';
    };

    const deleteCurrentHandler = (current) => {
        const payload = {
            data: current,
            uid
        }
        dispatch(deleteLink(payload));
    };

    return(
        <BlackBoxWindow state={linkWindowState}>
            <LinkWindowContainer>
                <WindowTitle>Check</WindowTitle>
                <LinksForm>
                    <Input label='name' ref={linkNameRef}/>
                    <Input label='URL' ref={linkUrlRef}/>
                </LinksForm>
                <LinksWrapper>
                    {
                        currentLinks?.map((link, index) => <Link data={link} key={index} action={deleteCurrentHandler}/>)
                    }
                </LinksWrapper>
                <ButtonsContainer>
                    <ButtonClassic name={'Cancel'} onClick={cancelHandler}/>
                    <ButtonClassic name={'Done'} onClick={addNewLinkHandler}/>
                </ButtonsContainer>
            </LinkWindowContainer>
        </BlackBoxWindow>
    )
}

export default LinkWindow;