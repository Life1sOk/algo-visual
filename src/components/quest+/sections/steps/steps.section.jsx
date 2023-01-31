import React, { useState, useEffect } from "react";

import { useDispatch } from "react-redux";
import { currentPointStatusChanger } from "../../../../App/slices/combined-areas.slice";

import Step from '../../../step/step.component';
import Point from "../../../point-one/point.component";

import { StepsWrapper, StepsContainer, PointsContainer, PointsWrapper, PointsButton, AnimationWrapper } from './steps.style';

const StepsSection = ({steps, color, questIndex, uid}) => {
    const dispatch = useDispatch();

    const [ currentPoints, setCurrentPoints ] = useState([]);
    const [ activeStep, setActiveStep ] = useState(null);

    const pickStepHandler = (pickedStep) => {
        setActiveStep(pickedStep.id);
        setCurrentPoints([]);
    }

    const pointStatusChangeHandler = (checked, id) => {
        const payload = {
            uid,
            questIndex,
            // stepId: pickedId,
            stepIndex: activeStep - 1,
            pointId: id,
            status: checked,
        };

        dispatch(currentPointStatusChanger(payload));
    };

    useEffect(() => {
        if(activeStep == null) {
            for (let i=0; i<steps.length; i++) {
                if(steps[i]?.status === false) {
                    setActiveStep(steps[i].id);
                    return setCurrentPoints(steps[i].points);
                };
            };
        };

        if(activeStep !== null) {
            for (let i=0; i<steps.length; i++) {
                if(steps[i]?.id === activeStep) {
                    setActiveStep(steps[i].id);
                    return setCurrentPoints(steps[i].points);
                };
            };
        };
    }, [steps]);

    useEffect(() => {
        for (let i=0; i<steps.length; i++) {
            if(steps[i]?.id === activeStep) {
                setCurrentPoints(steps[i].points);
            }
        };
    }, [activeStep]);

    return(
        <StepsWrapper>
            <PointsWrapper>
                <PointsContainer>
                    <AnimationWrapper>
                        {
                            currentPoints?.map((point, index) => <Point data={point} key={index} pointStatusChangeHandler={pointStatusChangeHandler}/>)
                        }
                    </AnimationWrapper>
                </PointsContainer>
                <PointsButton>
                    {
                        [1,2,3,4].map(num => <span key={num}>{num}</span>)
                    }
                </PointsButton>
            </PointsWrapper>
            <StepsContainer color={color}>
                {
                    steps?.map((step, index) => <Step data={step} key={index} active={activeStep === step.id} windowActionHandler={() => pickStepHandler(step)}/>)
                }
            </StepsContainer>
        </StepsWrapper>
    )
}

export default StepsSection;