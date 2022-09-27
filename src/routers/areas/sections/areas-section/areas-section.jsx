import React, { useState } from "react";

import { useSelector } from "react-redux";
import { selectAreas } from '../../../../App/slices/areas-slice';

// import { healthState, environmentState, growthState, peopleState } from './areas-states';

import Area from "../../components/area/area.component";

const AreasSection = () => {
    const [state, setState] = useState('Health');
    const areas = useSelector(selectAreas);

    // const pickStateHandler = (current) => {
    //     if (current === 'Health') setState(healthState);
    //     if (current === 'Environment') setState(environmentState);
    //     if (current === 'Growth') setState(growthState);
    //     if (current === 'People') setState(peopleState);
    // }

    return (
        <>
            {
                areas.map(area => <Area key={area.id} area={area} state={state} setState={setState} />)
            }
        </>
    )
}

export default AreasSection;