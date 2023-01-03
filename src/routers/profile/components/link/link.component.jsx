import React from "react";

import { LinkContainer, LinkStyle, DeleteButton } from './link.style';

const Link = ({data, type, action}) => {
    const { name, url } = data;

    const checkHandler = () => action(data);

    return(
        <LinkContainer type={type}>
            <LinkStyle href={url} target='_blank'>{name}</LinkStyle>
            {
                type === 'main' ? null :
                <DeleteButton onClick={checkHandler}>x</DeleteButton>
            }
        </LinkContainer>
    )
}

export default Link;