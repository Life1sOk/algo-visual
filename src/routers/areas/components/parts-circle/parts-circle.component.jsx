import React, { useRef } from "react";
import { Pie, getElementAtEvent, getDatasetAtEvent } from 'react-chartjs-2';

import { useSelector } from "react-redux";
import { selectCircle } from "../../../../App/slices/parts-slice";

import { PartsCircleContainer } from './parts-circle.style';
import { Chart, ArcElement, Tooltip } from 'chart.js'
Chart.register(ArcElement, Tooltip);

const PartsCircle = () => {
    const circlePieData = useSelector(selectCircle)
    const pie = useRef(null);

    const checkHandler = (e) => {
        // const checker = getElementAtEvent(pie.current, e);

        // if (checker[0].index === 0) console.log('zero');
        // if (checker[0].index === 1) console.log('one');
        // if (checker[0].index === 2) console.log('two');
        const checker = getDatasetAtEvent(pie.current, e);
        console.log(checker);
    }

    return (
        <PartsCircleContainer>
            <Pie datasetIdKey='pie' data={circlePieData} options ref={pie} onClick={checkHandler} />
        </PartsCircleContainer>
    )
}

export default PartsCircle;