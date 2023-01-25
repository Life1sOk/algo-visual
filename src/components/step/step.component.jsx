import React from "react";

import ButtonSd from "../button-sd/button-sd.component";

import { StepContainer, StepDescription, StepDeadline, ButtonWrapper, StepDescriptionWrapper } from './step.style';

const Step = ({data, stepActionHandler, windowActionHandler, index, show, active }) => {
    const { id, untilTime, description, status } = data;

    const deleteStepHandler = () => {
        if(stepActionHandler) stepActionHandler(id)
    };

    const windowAction = () => {
        if(windowActionHandler) windowActionHandler(index)
    };

    return(
        <StepContainer title={description} onClick={windowAction} active={active} show={!show}>
            {
                show &&
                <ButtonWrapper>
                    <ButtonSd type='delete' color='blue' background='white' scale='7' onClick={deleteStepHandler}/>
                </ButtonWrapper>
            }
            <StepDeadline active={active}>{`Date: ${untilTime}`}</StepDeadline>
            <StepDescription>
                <StepDescriptionWrapper>{description}</StepDescriptionWrapper>
            </StepDescription>
        </StepContainer>
    )
}

export default Step;