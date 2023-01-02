import React from "react";

import { LinkAnch } from './link.style';

const Link = ({data}) => {
    const { name, url } = data;

    return(
        <LinkAnch href={url} target='_blank'>
            {name}
        </LinkAnch>
    )
}

export default Link;