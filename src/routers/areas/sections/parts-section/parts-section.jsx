import React, { useState } from "react";

import { useSelector } from "react-redux";
import { selectAllParts } from "../../../../App/slices/areas-slice";

// GLobal style 
import { BlockLayout } from "../../../../Global-style/layouts";
import BlackBoxWindow from "../../../../Components/black-box/black-box.component";

import BlockHat from "../../../../Components/block-hat/block-hat.component";
import PartsWindow from "../../components/parts-window+/index";
import Part from '../../components/part+/part.component';
import { PartsDisplay } from './parts-section.style';

const PartsSection = () => {
    const allPartsData = useSelector(selectAllParts);
    const [window, setWindow] = useState(false);

    const openWindowHandler = () => setWindow(true);
    const closeWindowHandler = () => setWindow(false);

    return (
        <>  
            {
                window &&
                <BlackBoxWindow handler={closeWindowHandler}>
                    <PartsWindow />
                </BlackBoxWindow>
            }
            <BlockLayout>
                <BlockHat title='Parts' setting='Create next part' handler={openWindowHandler}/>
                <PartsDisplay>
                    {
                        allPartsData.map(part => <Part key={allPartsData.indexOf(part)} data={part} />)
                    }
                </PartsDisplay>
            </BlockLayout>
        </>
    )
}

export default PartsSection;