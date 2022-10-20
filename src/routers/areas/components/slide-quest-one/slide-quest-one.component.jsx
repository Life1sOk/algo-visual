import React from "react";

import { SlideSectionContainer, SlideInContainer, SlideDescription, SlideWrapper, Quote, Ul, Buttons } from './slide-quest-one.style';
import Input from "../input/input.component";
import TextArea from "../textarea/textarea.component";

const SlideQuestOne = () => {
    return (
        <SlideSectionContainer>
            <h2>Main</h2>
            <SlideWrapper>
                <SlideInContainer>
                    <Input label='Goal Title:' />
                    <TextArea type='normal' label='Current state:' />
                    <TextArea type='normal' label='Want to:' />
                    <TextArea type='big' label='Description / Why?:' />
                </SlideInContainer>
                <SlideDescription>
                    <Quote>Opportunities don't happen, you create them — Chris Grosser</Quote>
                    <Ul>
                        <li>Title - will be visible as the title of the quest.</li>
                        <li>Current state - the reference point from where you start your movement.</li>
                        <li>Want to - the end point of what you want to achieve.</li>
                        <li>Why - why are you doing this? Must be clearly understood.</li>
                    </Ul>
                    <Buttons>
                        <button>Accepte</button>
                    </Buttons>
                </SlideDescription>
            </SlideWrapper>
        </SlideSectionContainer>
    )
}

export default SlideQuestOne;