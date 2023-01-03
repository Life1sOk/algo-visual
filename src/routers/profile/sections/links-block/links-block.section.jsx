import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { selectLinks, linkOpen } from "../../../../App/slices/links-slice";

import { LinksBlockContainer, OpenWindow, LinksWrapper } from './links-block.style';
import Link from "../../components/link/link.component";
import LinkWindow from "../../components/link-window/link-window.component";

const LinksBlock = () => {
    const dispatch = useDispatch();
    const links = useSelector(selectLinks);

    const windowChangeHandler = () => dispatch(linkOpen(true));

    return(
        <>
            <LinkWindow />
            <LinksBlockContainer>
                <OpenWindow onClick={windowChangeHandler}>O</OpenWindow>
                <LinksWrapper>
                    {
                        links?.map((link, index) => <Link key={index} data={link} type={'main'} />)
                    }
                </LinksWrapper>
            </LinksBlockContainer>
        </>
    )
}

export default LinksBlock;