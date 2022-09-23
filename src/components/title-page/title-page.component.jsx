import React from "react";

import './title-page.style.scss';

const TitlePage = ({ titleName }) => {
    return (
        <div className="title-page">{titleName}</div>
    )
}

export default TitlePage