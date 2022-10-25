import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { selectSlideThree, threeDone } from "../../../../App/slices/quest-slides";
import { selectCreateQuestDaily, addDaily } from "../../../../App/slices/create-quest.slice";

import Ulist from "../u-list/u-list.component";
import Quote from "../quote/quote.component";
import Input from "../input/input.component";
import TextArea from "../textarea/textarea.component";
import Points from "../points/points.component";
import { SlideSectionContainer, SlideWrapper, SlideInContainer, SlideDescription, SlideInWrapper, DisplayPoints, Buttons } from './slide-quest-three.style';

const slideState = {
    title: '',
    description: '',
}

const SlideQuestThree = () => {
    const dispatch = useDispatch();

    const slideData = useSelector(selectCreateQuestDaily);
    const slidesState = useSelector(selectSlideThree);
    const { active, done } = slidesState;

    const [state, setState] = useState(slideState);

    const titleChangeHandler = (event) => setState({ ...state, title: event.target.value });
    const descriptionChangeHandler = (event) => setState({ ...state, description: event.target.value });

    const addChangeHandler = () => {
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
                        <Input label='Title:' onChange={titleChangeHandler} readOnly={done} />
                        <TextArea type='normal' label='Description:' onChange={descriptionChangeHandler} readOnly={done} />
                        {
                            !done ?
                                <button onClick={addChangeHandler}>Add</button>
                                :
                                null
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
                {/* {
                    slideData[0] &&
                    slideData.map(toDo => <Points key={toDo.id} data={toDo} />)
                } */}
            </DisplayPoints>
        </SlideSectionContainer>
    )
}

export default SlideQuestThree;