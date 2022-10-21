import React from "react";

import { useSelector } from "react-redux";
import { selectSlideOne } from "../../../../App/slices/quest-slides";

import { SlideSectionContainer, SlideInContainer, SlideDescription, SlideWrapper, Buttons } from './slide-quest-one.style';
import Input from "../input/input.component";
import TextArea from "../textarea/textarea.component";
import Quote from "../quote/quote.component";
import Ulist from "../u-list/u-list.component";


const SlideQuestOne = () => {
    const slidesState = useSelector(selectSlideOne);
    const { active, done } = slidesState;

    return (
        <SlideSectionContainer active={active}>
            <h2>Main</h2>
            <SlideWrapper>
                <SlideInContainer>
                    <Input label='Goal Title:' />
                    <TextArea type='normal' label='Current state:' />
                    <TextArea type='normal' label='Want to:' />
                    <TextArea type='big' label='Description / Why?:' />
                </SlideInContainer>
                <SlideDescription>
                    <Quote slide='one' />
                    <Ulist slide='one' />
                    <Buttons>
                        <button>Accepte</button>
                    </Buttons>
                </SlideDescription>
            </SlideWrapper>
        </SlideSectionContainer>
    )
}

export default SlideQuestOne;