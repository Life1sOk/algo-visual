import React from "react";

import { LinkAnch } from './link.style';

const Link = ({data}) => {
    const { title, link } = data;

    return(
        <LinkAnch href={link} target='_blank'>
            {title}
        </LinkAnch>
    )
}

export default Link;