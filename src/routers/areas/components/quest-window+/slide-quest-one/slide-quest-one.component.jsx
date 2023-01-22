import React, { useEffect, useRef } from "react";

import { useSelector, useDispatch } from "react-redux";
import { selectSlideOne, oneDone, twoActive } from "../../../../../App/slices/quest-slides";
import { mainAccept, selectCreateQuestReset, selectFixState, selectCreateQuestMain, setReset } from "../../../../../App/slices/create-quest.slice";
import { selectParts } from '../../../../../App/slices/areas-slice.js';

import { SlideSectionContainer, SlideInContainer, SlideDescription, SlideWrapper, Buttons, SlideTop } from './slide-quest-one.style';
import Input from "../../../../../Components/input/input.component";
import TextArea from "../../textarea/textarea.component";
import Quote from "../../quote/quote.component";
import Ulist from "../../u-list/u-list.component";
import PartsOption from "../parts-option/parts-option.component";
import Deadline from "../deadline/deadline.component";

const SlideQuestOne = () => {
    const dispatch = useDispatch();
    const resetState = useSelector(selectCreateQuestReset);
    const parts = useSelector(selectParts);

    const fixState = useSelector(selectFixState);
    const forFixMain = useSelector(selectCreateQuestMain);

    const slidesState = useSelector(selectSlideOne);
    const { active, done } = slidesState;

    const pickPartRef = useRef(null);
    const goalTitleRef = useRef(null);
    const goalCurrentStateRef = useRef(null);
    const goalWantToRef = useRef(null);
    const goalDesctiptionRef = useRef(null);
    const deadlineRef = useRef(null);

    const slideOneDoneHandler = () => {
        let pickedPart = parts.find(({title}) => title === pickPartRef.current.value);

        const goalSlideState = {
            part: pickPartRef.current.value,
            deadline: deadlineRef.current.value,
            title: goalTitleRef.current.value,
            current: goalCurrentStateRef.current.value,
            mainGoal: goalWantToRef.current.value,
            description: goalDesctiptionRef.current.value,
            color: pickedPart?.color,
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

            dispatch(setReset('no'));
        } 
    }, [resetState, dispatch]);
    
    useEffect(() => {
        if(fixState) {
            const { deadline, part, title, current, mainGoal, description } = forFixMain;
            
            deadlineRef.current.value = deadline;
            pickPartRef.current.value = part;
            goalTitleRef.current.value = title;
            goalCurrentStateRef.current.value = current;
            goalWantToRef.current.value = mainGoal;
            goalDesctiptionRef.current.value = description;
        }
    }, [fixState])


    return (
        <SlideSectionContainer active={active} done={done}>
            <SlideWrapper>
                <SlideInContainer>
                    <SlideTop>
                        <Deadline ref={deadlineRef}/>
                        <PartsOption ref={pickPartRef} disabled={fixState}/>
                    </SlideTop>
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