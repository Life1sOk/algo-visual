import React, { useState, useEffect } from "react";

import { useDispatch } from "react-redux";
import { currentPointStatusChanger } from "../../../../App/slices/combined-areas.slice";

import Step from '../../../step/step.component';
import Point from "../../../point-one/point.component";

import { StepsWrapper, StepsContainer, PointsContainer, PointsWrapper, PointsButton } from './steps.style';

const StepsSection = ({steps, color, questIndex, uid}) => {
    const dispatch = useDispatch();

    const [ currentPoints, setCurrentPoints ] = useState([]);
    const [pickedId, setPickedId] = useState(null);

    const pickStepHandler = (pickedStep) => {
        setCurrentPoints([]);
        setPickedId(pickedStep.id)
    };

    const pointStatusChangeHandler = (checked, id) => {
        const payload = {
            uid,
            questIndex,
            // stepId: pickedId,
            stepIndex: pickedId - 1,
            pointId: id,
            status: checked
        };

        dispatch(currentPointStatusChanger(payload));
    };
    
    useEffect(() => {
        for (let i=0; i<steps.length; i++) {
            if(steps[i]?.status === false) {
                setPickedId(steps[i].id);
                return setCurrentPoints(steps[i].points);
            }
        };
    }, [steps]);

    useEffect(() => {
        for (let i=0; i<steps.length; i++) {
            if(steps[i]?.id === pickedId) return setCurrentPoints(steps[i].points);
        };
    }, [currentPoints])

    return(
        <StepsWrapper>
            <StepsContainer color={color}>
                {
                    steps?.map((step, index) => <Step data={step} key={index} active={pickedId === step.id} windowActionHandler={() => pickStepHandler(step)}/>)
                }
            </StepsContainer>
            <PointsWrapper>
                <PointsContainer>
                    {
                        currentPoints?.map((point, index) => <Point data={point} key={index} pointStatusChangeHandler={pointStatusChangeHandler} pickedId={pickedId}/>)
                    }
                </PointsContainer>
                <PointsButton>
                    <button>Changes</button>
                </PointsButton>
            </PointsWrapper>
        </StepsWrapper>
    )
}

export default StepsSection;