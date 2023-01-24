import React, { useEffect, useRef } from "react";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { selectSlideOne, oneDone, twoActive } from "../../../../../../App/slices/quest-slides";
import { mainAccept, selectCreateQuestReset, selectFixState, selectCreateQuestMain, setReset } from "../../../../../../App/slices/create-quest.slice";
import { selectParts } from '../../../../../../App/slices/areas-slice.js';

//Componenets
import Input from "../../../../../../Components/input/input.component";
import TextArea from "../../../../../../Components/textarea/textarea.component";

import ButtonQW from "../../components/button-qw/button-qw.component";
import Node from "../../components/node/node.component";
import Ulist from '../../components/u-list/u-list.component';
import Quote from '../../components/quote/quote.component';
import PartsOption from "../../components/parts-option/parts-option.component";
import Deadline from '../../components/deadline/deadline.component';

// Styles
import { SlideWrapperLayout, MainContainerLayout, FlexSpaceBetweenWrapper } from "../../layout";

import { SlideInContainer } from './slide-quest-one.style';

// -----------------------------------------------------------//

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
        <SlideWrapperLayout active={active} done={done}>
                <SlideInContainer>
                    <FlexSpaceBetweenWrapper>
                        <Deadline ref={deadlineRef}/>
                        <PartsOption ref={pickPartRef} disabled={fixState} options={parts}/>
                    </FlexSpaceBetweenWrapper>
                    <Input label='Goal Title:' readOnly={done} ref={goalTitleRef} defaultValue='' />
                    <TextArea type='normal' label='Current state:' readOnly={done} ref={goalCurrentStateRef} />
                    <TextArea type='normal' label='Want to:' readOnly={done} ref={goalWantToRef} />
                    <TextArea type='big' label='Description / Why?:' readOnly={done} ref={goalDesctiptionRef} />
                    {
                        !done ?
                            <ButtonQW title='Next step' onClick={() => slideOneDoneHandler()} />
                            :
                            <ButtonQW title='Fix' onClick={() => slideOneFixHandler()} />
                    }
                </SlideInContainer>
                <MainContainerLayout width={60}>
                    <Node />
                    <Ulist slide='one' />
                    <Quote slide='one' />
                </MainContainerLayout>
        </SlideWrapperLayout>
    )
}

export default SlideQuestOne;