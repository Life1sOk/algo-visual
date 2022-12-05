import React, { useRef } from "react";
import { Pie, getElementAtEvent, getDatasetAtEvent } from 'react-chartjs-2';

import { useSelector } from "react-redux";
import { selectCircle } from "../../../../App/slices/areas-slice";

import NothingShow from "../../../../Components/nothing-show/nothing-show.component";
import { PartsCircleContainer} from './parts-circle.style';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js'
Chart.register(ArcElement, Tooltip, Legend);

const pieSetting = {
    plugins: {
        legend: {
            labels: {
                boxWidth: 28,
                font: {
                    size: 15,
                },
                color: 'rgb(255, 99, 132)',
                usePointStyle: true,
                pointStyle: 'circle',
            }
        }
    }
};

const PartsCircle = () => {
    const circlePieData = useSelector(selectCircle);
    const pie = useRef(null);

    const checkHandler = (e) => {
        // const checker = getElementAtEvent(pie.current, e);

        // if (checker[0].index === 0) console.log('zero');
        // if (checker[0].index === 1) console.log('one');
        // if (checker[0].index === 2) console.log('two');
        const checker = pie.current.options;
    }

    return (
        <PartsCircleContainer>
            <Pie datasetIdKey='pie' data={circlePieData} options={pieSetting} ref={pie} onClick={checkHandler} />
        </PartsCircleContainer>
    )
}

export default PartsCircle;