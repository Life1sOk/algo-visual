import React, { useState } from "react";

import { useSelector } from "react-redux";
import { selectAreas } from '../../../../App/slices/areas-slice';

import Area from "../../components/area/area.component";

const AreasSection = () => {
    const [state, setState] = useState('Health');
    const areas = useSelector(selectAreas);

    return (
        <>
            {
                Object.keys(areas).map(area => <Area key={area} area={area} state={state} setState={setState} />)
            }
        </>
    )
}

export default AreasSection;