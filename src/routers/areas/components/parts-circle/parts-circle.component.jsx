import React, { useState, useEffect } from "react";
import { Pie } from 'react-chartjs-2';

import { useSelector } from "react-redux";
import { selectParts } from "../../../../App/slices/areas-slice";

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

const circle = {
    labels: [],
    datasets: [{
        label: 'Area parts statistic',
        data: [],
        backgroundColor: [],
        hoverOffset: 0
    }]
}

const PartsCircle = () => {
    const [data, setData] = useState(circle);
    const allParts = useSelector(selectParts);

    useEffect(() => {
        let splitTitles = [];
        let splitColors = [];
        let splitCount = [];

        for(let i=0; i<allParts.length; i++) {
            let { title, color, totalQuests } = allParts[i];

            splitTitles.push(title);
            splitColors.push(color);
            splitCount.push(totalQuests);
        }

        setData({
            labels: splitTitles,
            datasets: [{
                label: 'Area parts statistic',
                data: splitCount,
                backgroundColor: splitColors,
                hoverOffset: 0
            }]
        })
    }, [allParts])


    return (
        <PartsCircleContainer>
            <Pie datasetIdKey='pie' data={data} options={pieSetting} />
        </PartsCircleContainer>
    )
}

export default PartsCircle;