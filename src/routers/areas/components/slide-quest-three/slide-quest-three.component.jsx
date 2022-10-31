import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { selectSlideThree, threeDone } from "../../../../App/slices/quest-slides";
import { selectCreateQuestDaily, addDaily } from "../../../../App/slices/create-quest.slice";

import Ulist from "../u-list/u-list.component";
import Quote from "../quote/quote.component";
import Input from "../input/input.component";
import TextArea from "../textarea/textarea.component";
import DailyAdd from "../daily-add/daily-add.component";
import { SlideSectionContainer, SlideWrapper, SlideInContainer, SlideDescription, SlideInWrapper, DisplayPoints, Buttons } from './slide-quest-three.style';

const slideState = {
    questName: '',
    description: '',
}

const SlideQuestThree = () => {
    const dispatch = useDispatch();

    const slideData = useSelector(selectCreateQuestDaily);
    const slidesState = useSelector(selectSlideThree);
    const { active, done } = slidesState;

    const [state, setState] = useState(slideState);
    const { questName, description } = state;

    const questNameChangeHandler = (event) => setState({ ...state, questName: event.target.value });
    const descriptionChangeHandler = (event) => setState({ ...state, description: event.target.value });

    const addChangeHandler = () => {
        if (questName.length < 1) return alert('add title');
        if (description.length < 1) return alert('add description');

        let generateId = slideData.length + 1;
        dispatch(addDaily({ ...state, id: generateId }));
        setState(slideState);
    }

    return (
        <SlideSectionContainer active={active} done={done}>
            <h2>Hello</h2>
            <SlideWrapper>
                <SlideInContainer>
                    <SlideInWrapper>
                        <Input label='Title:' onChange={questNameChangeHandler} readOnly={done} value={questName} />
                        <TextArea type='normal' label='Description:' onChange={descriptionChangeHandler} readOnly={done} value={description} />
                        {
                            !done &&
                            <button onClick={addChangeHandler}>Add</button>
                        }
                    </SlideInWrapper>
                </SlideInContainer>
                <SlideDescription>
                    <Quote slide='three' />
                    <Ulist slide='three' />
                    <Buttons>
                        {
                            !done ?
                                <button onClick={() => dispatch(threeDone('done'))}>Accept</button>
                                :
                                <button onClick={() => dispatch(threeDone('fix'))}>Fix</button>
                        }
                    </Buttons>
                </SlideDescription>
            </SlideWrapper>
            <DisplayPoints>
                {
                    slideData[0] &&
                    slideData.map(toDo => <DailyAdd key={toDo.id} data={toDo} show />)
                }
            </DisplayPoints>
        </SlideSectionContainer>
    )
}

export default SlideQuestThree;