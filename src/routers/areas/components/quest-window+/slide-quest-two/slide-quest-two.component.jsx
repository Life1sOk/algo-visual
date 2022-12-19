import React, { useRef } from "react";

import { useSelector, useDispatch } from "react-redux";
import { selectSlideTwo, twoDone, threeActive } from "../../../../../App/slices/quest-slides";
import { selectCreateQuestAchieve, addAchieve } from "../../../../../App/slices/create-quest.slice";

import Ulist from "../../u-list/u-list.component";
import Quote from "../../quote/quote.component";
import Input from "../../input/input.component";
import TextArea from "../../textarea/textarea.component";
import Point from "../../../../../Components/point/point.component";
import Deadline from "../deadline/deadline.component";
import { SlideSectionContainer, InDescWrapper, SlideIn, DisplayPoints, SlideDescription, Buttons, Date } from './slide-quest-two.style';

import { reFormatTime } from "../../../../../Hooks/re-format-date";

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
    }

    const slideTwoDoneHandler = (type) => {
        if (type === 'done') {
            dispatch(threeActive());
            dispatch(twoDone('done'));
        } else if (type === 'fix') {
            dispatch(twoDone('fix'));
        }
    }

    return (
        <SlideSectionContainer active={active} done={done}>
            <InDescWrapper>
                <SlideIn>
                    <Input label='Point Title:' readOnly={done} ref={pointTitleRef} />
                    <Date>
                        <span>Date:</span>
                        <Deadline ref={pointUntilTimeRef}/>
                    </Date>
                    <TextArea type='normal' label='Need to do!' readOnly={done} ref={pointDescriptionRef} />
                    {
                        !done &&
                        <button onClick={addChangeHandler}>Add</button>
                    }
                </SlideIn>
                <SlideDescription>
                    <Quote slide='two' />
                    <Ulist slide='two' />
                    <Buttons>
                        {
                            !done ?
                                <button onClick={() => slideTwoDoneHandler('done')}>Accept</button>
                                :
                                <button onClick={() => slideTwoDoneHandler('fix')}>Fix</button>
                        }
                    </Buttons>
                </SlideDescription>
            </InDescWrapper>
            <DisplayPoints>
                {
                    slideData[0] &&
                    slideData.map(quest => <Point key={quest.id} data={quest} show />)
                }
            </DisplayPoints>
        </SlideSectionContainer>
    )
}

export default SlideQuestTwo;