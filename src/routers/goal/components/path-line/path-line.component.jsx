import React from "react";

import { PathLineContainer, PathLineStyle, PathLineMark } from './path-line.style';

const PathLine = ({data}) => {
    const { message, type } = data;

    return(
        <PathLineContainer type={type}>
            {type === 'Pros' && <PathLineMark type={type}>&#8593;</PathLineMark>}
            {type === 'Cons' && <PathLineMark type={type}>&#8595;</PathLineMark>}
            {type === 'Tools' && <PathLineMark type={type}>T</PathLineMark>}
            <PathLineStyle type={type}>{message}</PathLineStyle>
        </PathLineContainer>
    )
};

export default PathLine;