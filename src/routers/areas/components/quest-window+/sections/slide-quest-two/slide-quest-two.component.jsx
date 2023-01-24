import React, { useRef } from "react";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { selectSlideTwo, twoDone, threeActive } from "../../../../../../App/slices/quest-slides";
import { selectCreateQuestAchieve, addAchieve } from "../../../../../../App/slices/create-quest.slice";

// Components
import TextArea from "../../../../../../Components/textarea/textarea.component";
import Input from "../../../../../../Components/input/input.component";
import Step from "../../../../../../Components/step/step.component";

import ButtonQW from "../../components/button-qw/button-qw.component";
import Node from "../../components/node/node.component";
import Quote from "../../components/quote/quote.component";
import Ulist from "../../components/u-list/u-list.component";
import Deadline from "../../components/deadline/deadline.component";

// Styles
import { SlideWrapperLayout, PointsLayout, MainContainerLayout, FlexSpaceBetweenWrapper } from "../../layout";

import { SlideFormContainer, SlideForm } from './slide-quest-two.style';

// Hoook
import { reFormatTime } from "../../../../../../Hooks/re-format-date";
// ---------------------------------------------------------- //

const SlideQuestTwo = () => {
    const dispatch = useDispatch();

    const slideData = useSelector(selectCreateQuestAchieve);
    const slidesState = useSelector(selectSlideTwo);
    const { active, done } = slidesState;

    const checkTime = (date) => reFormatTime(date);

    const pointTitleRef = useRef();
    const pointUntilTimeRef = useRef();
    const pointDescriptionRef = useRef();

    const addChangeHandler = () => {
        const pointSlideState = {
            title: pointTitleRef.current.value,
            status: false,
            untilTime: checkTime(pointUntilTimeRef.current.value),
            description: pointDescriptionRef.current.value,
        }

        const { title, untilTime, description } = pointSlideState;

        if (title.length < 1) return alert('title to add!');
        if (untilTime.length < 1) return alert('date to add!');
        if (description.length < 1) return alert('description to add!');

        let generateId = slideData.length + 1;
        dispatch(addAchieve({ ...pointSlideState, id: generateId }));

        pointTitleRef.current.value = '';
        pointUntilTimeRef.current.value = '';
        pointDescriptionRef.current.value = '';
    };

    const slideTwoDoneHandler = (type) => {
        if (type === 'done') {
            dispatch(threeActive());
            dispatch(twoDone('done'));
        } else if (type === 'fix') {
            dispatch(twoDone('fix'));
        }
    }

    return (
        <SlideWrapperLayout active={active} done={done}>
            <MainContainerLayout>
                <Node />
                <SlideFormContainer>
                    <Ulist slide='two' />
                    <SlideForm>
                        {/* <Input label='Point Title:' readOnly={done} ref={pointTitleRef} /> */}
                        <FlexSpaceBetweenWrapper>
                            <span>Date:</span>
                            <Deadline ref={pointUntilTimeRef}/>
                        </FlexSpaceBetweenWrapper>
                        <TextArea type='normal' label='Need to do!' readOnly={done} ref={pointDescriptionRef} />
                        {
                            !done &&
                            <button onClick={addChangeHandler}>Add</button>
                        }
                    </SlideForm>
                </SlideFormContainer>
                <Quote slide='two' />
            </MainContainerLayout>
            <PointsLayout side='left'>
                {
                    !done ?
                        <ButtonQW absolute onClick={() => slideTwoDoneHandler('done')} title='Next step'/>
                        :
                        <ButtonQW absolute onClick={() => slideTwoDoneHandler('fix')} title='Fix'/>
                }
                {
                    slideData?.map(quest => <Step key={quest.id} data={quest} show />)
                }
            </PointsLayout>
        </SlideWrapperLayout>
    )
}

export default SlideQuestTwo;