import React from "react";

import './title-page.style.scss';

const TitlePage = ({ titleName, ...others }) => {

    return (
        <span className="title" {...others}>{titleName}</span>
    )
}

export default TitlePage