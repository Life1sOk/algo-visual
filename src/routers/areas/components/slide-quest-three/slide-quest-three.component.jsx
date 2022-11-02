import React, { useRef } from "react";

import { useSelector, useDispatch } from "react-redux";
import { selectSlideThree, threeDone } from "../../../../App/slices/quest-slides";
import { selectCreateQuestDaily, addDaily } from "../../../../App/slices/create-quest.slice";

import Ulist from "../u-list/u-list.component";
import Quote from "../quote/quote.component";
import Input from "../input/input.component";
import TextArea from "../textarea/textarea.component";
import DailyAdd from "../../../../Components/daily-add/daily-add.component";
import { SlideSectionContainer, SlideWrapper, SlideInContainer, SlideDescription, SlideInWrapper, DisplayPoints, Buttons } from './slide-quest-three.style';

const SlideQuestThree = () => {
    const dispatch = useDispatch();

    const slideData = useSelector(selectCreateQuestDaily);
    const slidesState = useSelector(selectSlideThree);
    const { active, done } = slidesState;

    const dailyTitleRef = useRef();
    const dailyDescriptionRef = useRef();

    const addChangeHandler = () => {
        const dailySlideState = {
            questName: dailyTitleRef.current.value,
            description: dailyDescriptionRef.current.value,
        }
        const { questName, description } = dailySlideState;

        if (questName.length < 1) return alert('add title');
        if (description.length < 1) return alert('add description');

        let generateId = slideData.length + 1;
        dispatch(addDaily({ ...dailySlideState, id: generateId }));

        dailyTitleRef.current.value = '';
        dailyDescriptionRef.current.value = '';
    }

    return (
        <SlideSectionContainer active={active} done={done}>
            <h2>Hello</h2>
            <SlideWrapper>
                <SlideInContainer>
                    <SlideInWrapper>
                        <Input label='Title:' readOnly={done} ref={dailyTitleRef} />
                        <TextArea type='normal' label='Description:' readOnly={done} ref={dailyDescriptionRef} />
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