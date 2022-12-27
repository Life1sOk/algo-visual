import React from "react";

import Line from '../about-line/about-line.component';
import ProgressBar from "../../progress-bar/progress-bar.component";
import AboutStyle from "./about.style";

const About = ({ data, area, achieve, index, transferQuestHandler, type }) => {
    const { title, current, mainGoal, description } = data;

    return (
        <AboutStyle type={type}>
            <AboutStyle.AboutWrapper>
                <AboutStyle.RoadLinks>
                    <span>{area}</span>
                    <span>{data.part}</span>
                </AboutStyle.RoadLinks>
                <AboutStyle.Title>
                    <span className="quest-id">{index + 1}</span>
                    <h3 className="quest-title" title={title}>{title}</h3>
                </AboutStyle.Title>
                <Line label='Current state:' description={current}/>
                <Line label='Want to:' description={mainGoal}/>
                <Line label='Why?' description={description}/>
            </AboutStyle.AboutWrapper>
            {
                type === 'done' ?
                    <AboutStyle.PointBalls>
                        <p>Points:</p>
                        {
                            achieve.map((point, index) => <span key={index}>{point.id}</span>)
                        }
                    </AboutStyle.PointBalls>
                :
                <ProgressBar achieve={achieve} action={transferQuestHandler}/>
            }
        </AboutStyle>
    )
}

export default About;