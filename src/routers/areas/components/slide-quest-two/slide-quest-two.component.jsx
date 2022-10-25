import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { selectSlideTwo, twoDone } from "../../../../App/slices/quest-slides";
import { selectCreateQuestAchieve, addAchieve } from "../../../../App/slices/create-quest.slice";

import Ulist from "../u-list/u-list.component";
import Quote from "../quote/quote.component";
import Input from "../input/input.component";
import TextArea from "../textarea/textarea.component";
import Points from "../points/points.component";
import { SlideSectionContainer, InDescWrapper, SlideIn, DisplayPoints, SlideDescription, Buttons, Date } from './slide-quest-two.style';

import { reFormatTime } from "../../../../Hooks/re-format-date";

const slideState = {
    title: '',
    createdTime: '',
    untilTime: '',
    description: '',
}

const SlideQuestTwo = () => {
    const dispatch = useDispatch();

    const slideData = useSelector(selectCreateQuestAchieve);
    const slidesState = useSelector(selectSlideTwo);
    const { active, done } = slidesState;

    const [state, setState] = useState(slideState);

    const checkTime = (event) => {
        const formatedUntil = reFormatTime(event.target.value);
        setState({ ...state, untilTime: formatedUntil });
    }

    const titleStateChangeHandler = (event) => setState({ ...state, title: event.target.value });
    const descriptionChangeHandler = (event) => setState({ ...state, description: event.target.value });

    const addChangeHandler = () => {
        if (state.title.length < 1) return alert('title to add!');
        if (state.untilTime.length < 1) return alert('date to add!');
        if (state.description.length < 1) return alert('description to add!');

        let generateId = slideData.length + 1;
        dispatch(addAchieve({ ...state, id: generateId }));
        setState(slideState);
    }

    return (
        <SlideSectionContainer active={active} done={done}>
            <h2>Create Steps Points</h2>
            <InDescWrapper>
                <SlideIn>
                    <Input label='Point Title:' onChange={titleStateChangeHandler} readOnly={done} required value={state.title} />
                    <Date>
                        <span>Date:</span>
                        <input type='date' onChange={(e) => checkTime(e)} readOnly={done} required />
                    </Date>
                    <TextArea type='normal' label='Need to do!' onChange={descriptionChangeHandler} readOnly={done} required value={state.description} />
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
                                <button onClick={() => dispatch(twoDone('done'))}>Accept</button>
                                :
                                <button onClick={() => dispatch(twoDone('fix'))}>Fix</button>
                        }
                    </Buttons>
                </SlideDescription>
            </InDescWrapper>
            <DisplayPoints>
                {
                    slideData[0] &&
                    slideData.map(quest => <Points key={quest.id} data={quest} />)
                }
            </DisplayPoints>
        </SlideSectionContainer>
    )
}

export default SlideQuestTwo;