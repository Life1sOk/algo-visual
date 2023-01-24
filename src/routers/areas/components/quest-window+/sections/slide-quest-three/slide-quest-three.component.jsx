import React, { useRef } from "react";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { selectSlideThree, threeDone } from "../../../../../../App/slices/quest-slides";
import { selectCreateQuestDaily, addDaily } from "../../../../../../App/slices/create-quest.slice";

// Components
import Input from "../../../../../../Components/input/input.component";
import TextArea from "../../../../../../Components/textarea/textarea.component";
import DailyAdd from "../../../../../../Components/daily-add/daily-add.component";

import Node from "../../components/node/node.component";
import Ulist from "../../components/u-list/u-list.component";
import Quote from "../../components/quote/quote.component";

// Style
import { SlideWrapperLayout, PointsLayout, MainContainerLayout } from "../../layout";

import { SlideWrapper, SlideForm, Points } from './slide-quest-three.style';

// ----------------------------------------------------------- //

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
        <SlideWrapperLayout active={active} done={done}>
            <PointsLayout width={25}>
                {
                    slideData[0] &&
                    slideData.map(toDo => <DailyAdd key={toDo.id} data={toDo} show />)
                }
            </PointsLayout>
            <SlideWrapper>
                <SlideForm>
                    {/* <Input label='Title:' readOnly={done} ref={dailyTitleRef} /> */}
                    <TextArea type='big' label='Description:' readOnly={done} ref={dailyDescriptionRef} />
                    {
                        !done &&
                        <button onClick={addChangeHandler}>Add</button>
                    }
                </SlideForm>
                <Points>

                </Points>
            </SlideWrapper>
            <MainContainerLayout width={40}>
                <Node />
                <Ulist slide='three' />
                <Quote slide='three' />
            </MainContainerLayout>
        </SlideWrapperLayout>
    )
};

export default SlideQuestThree;