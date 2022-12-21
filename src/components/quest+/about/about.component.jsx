import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { doneQuest } from "../../../App/slices/combined-areas.slice";
import { selectAuthUid } from "../../../App/slices/auth.slice";

import Line from '../about-line/about-line.component';
import ProgressBar from "../../progress-bar/progress-bar.component";
import AboutStyle from "./about.style";

const About = ({ id, data, area, achieve, index }) => {
    const { title, current, mainGoal, description } = data;
    const dispatch = useDispatch();
    const uid = useSelector(selectAuthUid);

    const checkHandler = () => {
        const payload = { id, uid, from: 'active', to: 'done'};
        dispatch(doneQuest(payload));
        console.log('hello');
    }

    return (
        <AboutStyle>
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
            <ProgressBar achieve={achieve} action={checkHandler}/>
        </AboutStyle>
    )
}

export default About;