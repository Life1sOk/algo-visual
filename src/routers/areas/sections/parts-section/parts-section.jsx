import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { selectAllParts, partWindowOpenHandler } from "../../../../App/slices/areas-slice";

// GLobal style 
import { BlockLayout } from "../../../../Global-style/layouts";

import BlockHat from "../../../../Components/block-hat/block-hat.component";
import PartsWindow from "../../components/parts-window+/index";
import Part from '../../components/part+/part.component';
import { PartsDisplay } from './parts-section.style';

const PartsSection = () => {
    const dispatch = useDispatch();
    const allPartsData = useSelector(selectAllParts);

    const openWindowHandler = () => dispatch(partWindowOpenHandler(true));

    return (
        <>  
            <PartsWindow />
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