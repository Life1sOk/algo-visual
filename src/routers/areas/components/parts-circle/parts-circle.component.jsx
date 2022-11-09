import React, { useState, useRef } from "react";
import { Pie, getElementAtEvent } from 'react-chartjs-2';

import { PartsCircleContainer } from './parts-circle.style';
import { Chart, ArcElement, Tooltip } from 'chart.js'
Chart.register(ArcElement, Tooltip);

const dataPie = {
    labels: [
        'Emotion and Spiritual Health', 'Financial Health', 'Physical Health'
    ],
    datasets: [{
        label: 'My First Dataset',
        data: [10, 10, 10],
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
        ],
        hoverOffset: 0
    }]
};

const PartsCircle = () => {
    const [pieData, setPieData] = useState(dataPie);
    const pie = useRef(null);

    const checkHandler = (e) => {
        const checker = getElementAtEvent(pie.current, e);

        if (checker[0].index === 0) console.log('zero');
        if (checker[0].index === 1) console.log('one');
        if (checker[0].index === 2) console.log('two');
    }

    return (
        <PartsCircleContainer>
            <Pie datasetIdKey='pie' data={pieData} options ref={pie} onClick={checkHandler} />
        </PartsCircleContainer>
    )
}

export default PartsCircle;