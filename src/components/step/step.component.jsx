import React from "react";

import { useDispatch } from "react-redux";
import { deleteAchieve } from "../../App/slices/create-quest.slice";

import ButtonSd from "../button-sd/button-sd.component";

import { StepContainer, StepDescription, StepDeadline, ButtonWrapper, StepDescriptionWrapper } from './step.style';

const Step = ({data}) => {
    const { title, id, untilTime, description, status } = data;

    const dispatch = useDispatch();

    const deletePointHandler = () => dispatch(deleteAchieve(id));

    return(
        <StepContainer title={description}>
            <ButtonWrapper>
                <ButtonSd type='delete' color='blue' background='white' scale='7' onClick={deletePointHandler}/>
            </ButtonWrapper>
            <StepDeadline>{`Date: ${untilTime}`}</StepDeadline>
            <StepDescription>
                <StepDescriptionWrapper>{description}</StepDescriptionWrapper>
            </StepDescription>
        </StepContainer>
    )
}

export default Step;