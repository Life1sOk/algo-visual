import React, { useEffect, useRef } from "react";

import { useSelector, useDispatch } from "react-redux";
import { selectSlideOne, oneDone, twoActive } from "../../../../App/slices/quest-slides";
import { mainAccept, selectCreateQuestReset } from "../../../../App/slices/create-quest.slice";

import { SlideSectionContainer, SlideInContainer, SlideDescription, SlideWrapper, Buttons } from './slide-quest-one.style';
import Input from "../input/input.component";
import TextArea from "../textarea/textarea.component";
import Quote from "../quote/quote.component";
import Ulist from "../u-list/u-list.component";
import PartsOption from "../parts-option/parts-option.component";

const SlideQuestOne = () => {
    const dispatch = useDispatch();
    const resetState = useSelector(selectCreateQuestReset);
    const slidesState = useSelector(selectSlideOne);
    const { active, done } = slidesState;

    const pickPartRef = useRef();
    const goalTitleRef = useRef();
    const goalCurrentStateRef = useRef();
    const goalWantToRef = useRef();
    const goalDesctiptionRef = useRef();

    const slideOneDoneHandler = () => {
        const goalSlideState = {
            part: pickPartRef.current.value,
            title: goalTitleRef.current.value,
            current: goalCurrentStateRef.current.value,
            mainGoal: goalWantToRef.current.value,
            description: goalDesctiptionRef.current.value,
        }
        const { title, current, mainGoal, description } = goalSlideState;

        if (title.length < 1) return alert('need add title');
        if (current.length < 1) return alert('add current state');
        if (mainGoal.length < 1) return alert('u need your goal');
        if (description.length < 1) return alert('add why?');

        dispatch(oneDone('done'));
        dispatch(twoActive());
        dispatch(mainAccept(goalSlideState));
    }

    const slideOneFixHandler = () => dispatch(oneDone('fix'));

    useEffect(() => {
        if (resetState === 'yes') {
            goalTitleRef.current.value = '';
            goalCurrentStateRef.current.value = '';
            goalWantToRef.current.value = '';
            goalDesctiptionRef.current.value = '';
        }
    }, [resetState])

    return (
        <SlideSectionContainer active={active} done={done}>
            <h2>Add new quest</h2>
            <SlideWrapper>
                <SlideInContainer>
                    <PartsOption ref={pickPartRef} />
                    <Input label='Goal Title:' readOnly={done} ref={goalTitleRef} defaultValue='' />
                    <TextArea type='normal' label='Current state:' readOnly={done} ref={goalCurrentStateRef} />
                    <TextArea type='normal' label='Want to:' readOnly={done} ref={goalWantToRef} />
                    <TextArea type='big' label='Description / Why?:' readOnly={done} ref={goalDesctiptionRef} />
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