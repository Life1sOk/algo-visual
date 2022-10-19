import React from "react";

import TextArea from "../../components/textarea/textarea.component";
import Input from "../../components/input/input.component";
import Points from "../../components/points/points.component";
import { PlanSectionContainer, SectionOne, SectionTwo, SectionThree } from './plan-section.style';

const PlanSection = () => {

    return (
        <PlanSectionContainer>
            <SectionOne>
                <h2>Main</h2>
                <Input label='Goal Title:' />
                <TextArea type='normal' label='Current state:' />
                <TextArea type='normal' label='Want to:' />
                <TextArea type='big' label='Description / Why?:' />
            </SectionOne>
            <SectionTwo>
                <h2>Create Steps Points</h2>
                <div className="block-wrapper">
                    <div className="block">
                        <Input label='Point Title:' />
                        <TextArea type='normal' label='Need to do!' />
                    </div>
                    <div className="desc"></div>
                </div>
                <div className="display">
                    <Points />
                    <Points />
                    <Points />
                </div>
            </SectionTwo>
            <SectionThree />
        </PlanSectionContainer>
    )
}

export default PlanSection;