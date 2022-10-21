import React from "react";

import { useSelector } from "react-redux";
import { selectSlideTwo } from "../../../../App/slices/quest-slides";

import Ulist from "../u-list/u-list.component";
import Quote from "../quote/quote.component";
import Input from "../input/input.component";
import TextArea from "../textarea/textarea.component";
import Points from "../points/points.component";
import { SlideSectionContainer, InDescWrapper, SlideIn, DisplayPoints, SlideDescription, Buttons, Date } from './slide-quest-two.style';

const slideState = {
    id: 1,
    title: 'B2',
    createdTime: 'today',
    untilTime: '',
    description: 'Find some date with examse',
}

const SlideQuestTwo = () => {
    const slidesState = useSelector(selectSlideTwo);
    const { active, done } = slidesState;

    return (
        <SlideSectionContainer active={active}>
            <h2>Create Steps Points</h2>
            <InDescWrapper>
                <SlideIn>
                    <Input label='Point Title:' />
                    <Date>
                        <span>Date:</span>
                        <input type='date' />
                    </Date>
                    <TextArea type='normal' label='Need to do!' />
                    <button>Add</button>
                </SlideIn>
                <SlideDescription>
                    <Quote slide='two' />
                    <Ulist slide='two' />
                    <Buttons>
                        <button>Accept</button>
                    </Buttons>
                </SlideDescription>
            </InDescWrapper>
            <DisplayPoints>
                <Points />
            </DisplayPoints>
        </SlideSectionContainer>
    )
}

export default SlideQuestTwo;