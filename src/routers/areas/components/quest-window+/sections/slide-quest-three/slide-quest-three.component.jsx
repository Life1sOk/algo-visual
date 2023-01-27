import React, { useRef } from "react";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { selectSlideThree, threeDone } from "../../../../../../App/slices/quest-slides";
import { addPoints, selectCreateQuestSteps, activeStepHandler, selectActiveStep, deletePoints } from "../../../../../../App/slices/create-quest.slice";

// Components
import TextArea from "../../../../../../Components/textarea/textarea.component";
import Step from "../../../../../../Components/step/step.component";
import Point from "../../../../../../Components/point-one/point.component";

import ButtonQW from "../../components/button-qw/button-qw.component";
import Node from "../../components/node/node.component";
import Ulist from "../../components/u-list/u-list.component";
import Quote from "../../components/quote/quote.component";

// Style
import { SlideWrapperLayout, StepsLayout, MainContainerLayout, DoneWindow } from "../../layout";

import { SlideWrapper, SlideForm, PointsContainer } from './slide-quest-three.style';

// ----------------------------------------------------------- //

const SlideQuestThree = () => {
    const dispatch = useDispatch();
    const steps = useSelector(selectCreateQuestSteps);
    const activeStepIndex = useSelector(selectActiveStep);
    const slidesState = useSelector(selectSlideThree);
    const { active, done } = slidesState;
    
    const dailyDescriptionRef = useRef(null);

    console.log(dailyDescriptionRef?.current?.value)
    
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
    };
    
    const pickCurrentStepHandler = (index) => dispatch(activeStepHandler(index));
    const deletePoint = (index) => dispatch(deletePoints(index));

    return (
        <SlideWrapperLayout active={active}>
            <DoneWindow state={done}/>
            <StepsLayout width={25}>
                {
                    steps?.map((toDo, index) => <Step key={toDo.id} data={toDo} index={index} active={activeStepIndex === index} windowActionHandler={pickCurrentStepHandler}/>)
                }
            </StepsLayout>
            <SlideWrapper>
                <SlideForm>
                    <TextArea type='big' label='Description:' ref={dailyDescriptionRef} />
                    <button onClick={addChangeHandler}>Add</button>
                </SlideForm>
                <PointsContainer>
                    {
                        !done ?
                            <ButtonQW absolute onClick={() => slideThreeDoneHandler('done')} title='Next step'/>
                            :
                            <ButtonQW absolute onClick={() => slideThreeDoneHandler('fix')} title='Fix' zindex={13}/>
                    }
                    {
                        steps[activeStepIndex]?.points?.map((point, index) => <Point key={index} data={point} deleteHandler={deletePoint}/>)
                    }
                </PointsContainer>
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