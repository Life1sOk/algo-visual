import React, { memo } from "react";

import { SlideSwithcerLink } from './slide-switcher.style';

const SlideSwitcher = memo(({ name, ...others }) => {
    return (
        <SlideSwithcerLink {...others}>{name}</SlideSwithcerLink>
    )
})

export default SlideSwitcher;