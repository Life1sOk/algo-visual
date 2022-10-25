import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { selectSlideOne, oneDone } from "../../../../App/slices/quest-slides";
import { mainAccept } from "../../../../App/slices/create-quest.slice";

import { SlideSectionContainer, SlideInContainer, SlideDescription, SlideWrapper, Buttons } from './slide-quest-one.style';
import Input from "../input/input.component";
import TextArea from "../textarea/textarea.component";
import Quote from "../quote/quote.component";
import Ulist from "../u-list/u-list.component";

const slideState = {
    title: '',
    description: '',
    mainGoal: '',
    current: '',
}

const SlideQuestOne = () => {
    const dispatch = useDispatch();
    const slidesState = useSelector(selectSlideOne);
    const { active, done } = slidesState;

    const [state, setState] = useState(slideState);
    const { title, description, mainGoal, current } = state;

    const titleChangeHandler = (event) => setState({ ...state, title: event.target.value });
    const currentStateChangeHandler = (event) => setState({ ...state, current: event.target.value });
    const wantChangeHandler = (event) => setState({ ...state, mainGoal: event.target.value });
    const descriptionChangeHandler = (event) => setState({ ...state, description: event.target.value });

    const slideOneDoneHandler = () => {
        if (title.length < 1) return alert('need add title');
        if (current.length < 1) return alert('add current state');
        if (mainGoal.length < 1) return alert('u need your goal');
        if (description.length < 1) return alert('add why?');

        dispatch(oneDone('done'));
        dispatch(mainAccept(state));
    }

    const slideOneFixHandler = () => {
        dispatch(oneDone('fix'));
    }

    return (
        <SlideSectionContainer active={active} done={done}>
            <h2>Main</h2>
            <SlideWrapper>
                <SlideInContainer>
                    <Input label='Goal Title:' readOnly={done} onChange={titleChangeHandler} value={title} />
                    <TextArea type='normal' label='Current state:' readOnly={done} onChange={currentStateChangeHandler} value={current} />
                    <TextArea type='normal' label='Want to:' readOnly={done} onChange={wantChangeHandler} value={mainGoal} />
                    <TextArea type='big' label='Description / Why?:' readOnly={done} onChange={descriptionChangeHandler} value={description} />
                </SlideInContainer>
                <SlideDescription>
                    <Quote slide='one' />
                    <Ulist slide='one' />
                    <Buttons>
                        {
                            !done ?
                                <button onClick={() => slideOneDoneHandler()}>Accepte</button>
                                :
                                <button onClick={() => slideOneFixHandler()}>Fix</button>
                        }
                    </Buttons>
                </SlideDescription>
            </SlideWrapper>
        </SlideSectionContainer>
    )
}

export default SlideQuestOne;