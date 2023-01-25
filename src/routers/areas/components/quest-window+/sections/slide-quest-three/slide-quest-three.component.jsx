import React, { useRef } from "react";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { selectSlideThree, threeDone } from "../../../../../../App/slices/quest-slides";
import { addPoints, selectCreateQuestSteps, activeStepHandler, selectActiveStep } from "../../../../../../App/slices/create-quest.slice";

// Components
import TextArea from "../../../../../../Components/textarea/textarea.component";
import Step from "../../../../../../Components/step/step.component";

import ButtonQW from "../../components/button-qw/button-qw.component";
import Points from "../../components/points/points.components";
import Node from "../../components/node/node.component";
import Ulist from "../../components/u-list/u-list.component";
import Quote from "../../components/quote/quote.component";

// Style
import { SlideWrapperLayout, StepsLayout, MainContainerLayout, DoneWindow } from "../../layout";

import { SlideWrapper, SlideForm } from './slide-quest-three.style';

// ----------------------------------------------------------- //

const SlideQuestThree = () => {
    const dispatch = useDispatch();

    const steps = useSelector(selectCreateQuestSteps);
    const activeStep = useSelector(selectActiveStep);
    const slidesState = useSelector(selectSlideThree);
    const { active, done } = slidesState;

    const dailyDescriptionRef = useRef(null);

    const addChangeHandler = () => {
        const pointSlideState = {
            status: false,
            description: dailyDescriptionRef.current.value,
        }
        const { description } = pointSlideState;

        if (description.length < 1) return alert('add description');

        dispatch(addPoints(pointSlideState));

        dailyDescriptionRef.current.value = '';
    };

    const slideThreeDoneHandler = (type) => {
        if (type === 'done') {
            dispatch(threeDone('done'));
        } else if (type === 'fix') {
            dispatch(threeDone('fix'));
        }
    }

    const pickCurrentStepHandler = (index) => dispatch(activeStepHandler(index));

    return (
        <SlideWrapperLayout active={active}>
            <DoneWindow state={done}/>
            <StepsLayout width={25}>
                {
                    steps?.map((toDo, index) => <Step key={toDo.id} data={toDo} index={index} active={activeStep === index} windowActionHandler={pickCurrentStepHandler}/>)
                }
            </StepsLayout>
            <SlideWrapper>
                <SlideForm>
                    <TextArea type='big' label='Description:' ref={dailyDescriptionRef} />
                    <button onClick={addChangeHandler}>Add</button>
                </SlideForm>
                <Points steps={steps}>
                    {
                        !done ?
                            <ButtonQW absolute onClick={() => slideThreeDoneHandler('done')} title='Next step'/>
                            :
                            <ButtonQW absolute onClick={() => slideThreeDoneHandler('fix')} title='Fix' zindex={13}/>
                    }
                </Points>
            </SlideWrapper>
            <MainContainerLayout width={40}>
                <Node />
                <Ulist slide='three' />
                <Quote slide='three' />
            </MainContainerLayout>
        </SlideWrapperLayout>
    )
};

export default SlideQuestThree;