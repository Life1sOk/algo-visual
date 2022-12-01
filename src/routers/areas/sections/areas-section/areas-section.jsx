import React from "react";

import { useSelector } from "react-redux";
import { selectAreas } from '../../../../App/slices/areas-slice';

import Area from "../../components/area/area.component";

const AreasSection = () => {
    const areas = useSelector(selectAreas);

    return (
        <>
            {
                Object.keys(areas).map(area => <Area key={area} area={area} />)
            }
        </>
    )
}

export default AreasSection;