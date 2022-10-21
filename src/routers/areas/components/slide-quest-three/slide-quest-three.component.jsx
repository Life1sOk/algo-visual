import React from "react";

import { useSelector } from "react-redux";
import { selectSlideThree } from "../../../../App/slices/quest-slides";

import Ulist from "../u-list/u-list.component";
import Quote from "../quote/quote.component";
import Input from "../input/input.component";
import TextArea from "../textarea/textarea.component";
import Points from "../points/points.component";
import { SlideSectionContainer, SlideWrapper, SlideInContainer, SlideDescription, SlideInWrapper, DisplayPoints, Buttons } from './slide-quest-three.style';

const SlideQuestThree = () => {
    const slidesState = useSelector(selectSlideThree);
    const { active, done } = slidesState;

    return (
        <SlideSectionContainer active={active}>
            <h2>Hello</h2>
            <SlideWrapper>
                <SlideInContainer>
                    <SlideInWrapper>
                        <Input label='Title:' />
                        <TextArea type='normal' label='Description:' />
                        <button>Add</button>
                    </SlideInWrapper>
                </SlideInContainer>
                <SlideDescription>
                    <Quote slide='three' />
                    <Ulist slide='three' />
                    <Buttons>
                        <button>Accept</button>
                    </Buttons>
                </SlideDescription>
            </SlideWrapper>
            <DisplayPoints>
                <Points />
            </DisplayPoints>
        </SlideSectionContainer>
    )
}

export default SlideQuestThree;