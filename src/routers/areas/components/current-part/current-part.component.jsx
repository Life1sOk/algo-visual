import React, { useState, useEffect } from "react";

import { CurrentPartContainer } from './current-part.style';

const CurrentPart = ({ currentPart, children, ...others }) => {
    const [active, setActive] = useState(null);

    useEffect(() => {
        if (currentPart === children) return setActive(true);
        if (currentPart !== children) return setActive(false);
    }, [currentPart, children])

    return (
        <CurrentPartContainer active={active} {...others}>{children}</CurrentPartContainer>
    )
};

export default CurrentPart;