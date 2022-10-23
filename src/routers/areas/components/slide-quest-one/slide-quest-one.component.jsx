import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { selectSlideOne, oneDone } from "../../../../App/slices/quest-slides";
import { selectCreateQuestMain, mainAccept } from "../../../../App/slices/create-quest.slice";

import { SlideSectionContainer, SlideInContainer, SlideDescription, SlideWrapper, Buttons } from './slide-quest-one.style';
import Input from "../input/input.component";
import TextArea from "../textarea/textarea.component";
import Quote from "../quote/quote.component";
import Ulist from "../u-list/u-list.component";


const SlideQuestOne = () => {
    const dispatch = useDispatch();
    const slidesState = useSelector(selectSlideOne);
    const { active, done } = slidesState;

    const slideData = useSelector(selectCreateQuestMain);
    const [state, setState] = useState(slideData);

    const titleChangeHandler = (event) => setState({ ...state, title: event.target.value });
    const currentStateChangeHandler = (event) => setState({ ...state, current: event.target.value });
    const wantChangeHandler = (event) => setState({ ...state, mainGoal: event.target.value });
    const descriptionChangeHandler = (event) => setState({ ...state, description: event.target.value });

    const slideOneDoneHandler = () => {
        dispatch(oneDone('done'));
        dispatch(mainAccept(state))
    }

    const slideOneFixHandler = () => {
        dispatch(oneDone('fix'));
    }

    return (
        <SlideSectionContainer active={active} done={done}>
            <h2>Main</h2>
            <SlideWrapper>
                <SlideInContainer>
                    <Input label='Goal Title:' readOnly={done} onChange={titleChangeHandler} />
                    <TextArea type='normal' label='Current state:' readOnly={done} onChange={currentStateChangeHandler} />
                    <TextArea type='normal' label='Want to:' readOnly={done} onChange={wantChangeHandler} />
                    <TextArea type='big' label='Description / Why?:' readOnly={done} onChange={descriptionChangeHandler} />
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