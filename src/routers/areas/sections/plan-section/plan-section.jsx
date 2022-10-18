import React from "react";

import TextArea from "../../components/textarea/textarea.component";
import Input from "../../components/input/input.component";
import CreateTodo from "../../components/create-todo/create-todo.component";
import { PlanSectionContainer, SectionOne, SectionTwo, SectionThree } from './plan-section.style';

const PlanSection = () => {

    return (
        <PlanSectionContainer>
            <SectionOne>
                <h2>Main</h2>
                <Input />
                <TextArea type='normal' label='Current state:' />
                <TextArea type='normal' label='Want to:' />
                <TextArea type='big' label='Description / Why?:' />
            </SectionOne>
            <SectionTwo>
                <CreateTodo />
            </SectionTwo>
            <SectionThree />
        </PlanSectionContainer>
    )
}

export default PlanSection;