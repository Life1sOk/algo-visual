import React from "react";

import PartsDisplayMain from "../parts-display-main/parts-display-main.component";
import PartsDisplayAdd from "../parts-display-add/parts-display-add.component";
import { PartsDescriptionContainer, PartsNav } from './parts-description.style';

const PartsDescription = () => {
    return (
        <PartsDescriptionContainer>
            <PartsNav>
                <button>Main</button>
                <button>Add</button>
            </PartsNav>
            {/* <PartsDisplayMain /> */}
            <PartsDisplayAdd />
        </PartsDescriptionContainer>
    )
}

export default PartsDescription;