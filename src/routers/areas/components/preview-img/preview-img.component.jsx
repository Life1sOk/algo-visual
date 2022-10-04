import React from "react";

import './preview-img.style.scss';

const PreviewImg = ({ image, title }) => {
    return (
        <img className="img" src={image} alt={title} />
    )
}

export default PreviewImg;