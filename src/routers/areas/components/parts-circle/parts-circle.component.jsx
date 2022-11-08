import React, { useState, useRef } from "react";
import { Pie, getElementAtEvent } from 'react-chartjs-2';

import { PartsCircleContainer } from './parts-circle.style';
import { Chart, ArcElement } from 'chart.js'
Chart.register(ArcElement);

const dataPie = {
    labels: [
        'Red',
        'Blue',
        'Yellow'
    ],
    datasets: [{
        label: 'My First Dataset',
        data: [1, 1],
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
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
    }

    return (
        <PartsCircleContainer>
            <Pie datasetIdKey='pie' data={pieData} options ref={pie} onClick={checkHandler} />
        </PartsCircleContainer>
    )
}

export default PartsCircle;