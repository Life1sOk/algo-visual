import React, { useRef } from "react";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { selectSlideTwo, twoDone, threeActive } from "../../../../../../App/slices/quest-slides";
import { selectCreateQuestSteps, addSteps, deleteSteps } from "../../../../../../App/slices/create-quest.slice";

// Components
import TextArea from "../../../../../../Components/textarea/textarea.component";
import Step from "../../../../../../Components/step/step.component";

import ButtonQW from "../../components/button-qw/button-qw.component";
import Node from "../../components/node/node.component";
import Quote from "../../components/quote/quote.component";
import Ulist from "../../components/u-list/u-list.component";
import Deadline from "../../components/deadline/deadline.component";

// Styles
import { SlideWrapperLayout, StepsLayout, MainContainerLayout, FlexSpaceBetweenWrapper, DoneWindow } from "../../layout";

import { SlideFormContainer, SlideForm } from './slide-quest-two.style';

// Hoook
import { reFormatTime } from "../../../../../../Hooks/re-format-date";
// ---------------------------------------------------------- //

const SlideQuestTwo = () => {
    const dispatch = useDispatch();

    const steps = useSelector(selectCreateQuestSteps);
    const slidesState = useSelector(selectSlideTwo);
    const { active, done } = slidesState;

    const checkTime = (date) => reFormatTime(date);

    const pointUntilTimeRef = useRef(null);
    const pointDescriptionRef = useRef(null);

    const addChangeHandler = () => {
        const pointSlideState = {
            points: [],
            status: false,
            untilTime: checkTime(pointUntilTimeRef.current.value),
            description: pointDescriptionRef.current.value,
        }

        const { untilTime, description } = pointSlideState;

        if (untilTime.length < 1) return alert('date to add!');
        if (description.length < 1) return alert('description to add!');

        let generateId = steps.length + 1;
        dispatch(addSteps({ ...pointSlideState, id: generateId }));

        pointUntilTimeRef.current.value = '';
        pointDescriptionRef.current.value = '';
    };

    const deleteChangeHandler = (payload) => dispatch(deleteSteps(payload));

    const slideTwoDoneHandler = (type) => {
        if (type === 'done') {
            dispatch(threeActive());
            dispatch(twoDone('done'));
        } else if (type === 'fix') {
            dispatch(twoDone('fix'));
        }
    }

    return (
        <SlideWrapperLayout active={active}>
            <DoneWindow state={done}/>
            <MainContainerLayout>
                <Node />
                <SlideFormContainer>
                    <Ulist slide='two' />
                    <SlideForm>
                        <FlexSpaceBetweenWrapper>
                            <span>Date:</span>
                            <Deadline ref={pointUntilTimeRef}/>
                        </FlexSpaceBetweenWrapper>
                        <TextArea type='normal' label='Need to do!' ref={pointDescriptionRef} />
                        <button onClick={addChangeHandler}>Add</button>
                    </SlideForm>
                </SlideFormContainer>
                <Quote slide='two' />
            </MainContainerLayout>
            {/* <StepsLayout side='left'>
                {
                    !done ?
                        <ButtonQW absolute onClick={() => slideTwoDoneHandler('done')} title='Next step'/>
                        :
                        <ButtonQW absolute onClick={() => slideTwoDoneHandler('fix')} title='Fix' zindex={13}/>
                }
                {
                    steps?.map(quest => <Step key={quest.id} data={quest} show stepActionHandler={deleteChangeHandler}/>)
                }
            </StepsLayout> */}
        </SlideWrapperLayout>
    )
}

export default SlideQuestTwo;