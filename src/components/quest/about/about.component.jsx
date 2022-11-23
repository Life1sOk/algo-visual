import React from "react";

import Line from '../about-line/about-line.component';
import AboutStyle from "./about.style";

const About = ({ id, data, area }) => {
    const { title, current, mainGoal, description } = data;

    return (
        <AboutStyle>
            <AboutStyle.RoadLinks>
                <span>{area}</span>
                <span>{data.part}</span>
            </AboutStyle.RoadLinks>
            <AboutStyle.Title>
                <span className="quest-id">{id}</span>
                <h3 className="quest-title">{title}</h3>
            </AboutStyle.Title>
            <Line label='Current state:' description={current}/>
            <Line label='Want to:' description={mainGoal}/>
            <Line label='Why?' description={description}/>
            <div className="progress">Progress Bar</div>
        </AboutStyle>
    )
}

export default About;