import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { addQuest } from "../../App/slices/daily.slice";
import { deletePoints } from "../../App/slices/create-quest.slice";
import ButtonSd from "../button-sd/button-sd.component";

import { DailyAddContainer, DailyAddTitle, DailyAddDescription, DailyAddWrapper, DailyAddBack, ButtonWrapper } from './daily-add.style';

const DailyAdd = ({ data, show, title }) => {
    const dispatch = useDispatch();
    const { id, questName, description } = data;
    const [open, setOpen] = useState(false);

    const reverseHandler = () => setOpen(!open);
    const sendToDailyPlan = () => dispatch(addQuest({data: { ...data, questName: `${title} - ${questName}` }, type: 'main'}));
    const deleteDailyHandler = () => dispatch(deletePoints(id));

    return (
        <>
            {
                show ?
                    <DailyAddContainer>
                        <ButtonWrapper>
                            <ButtonSd type='delete' onClick={deleteDailyHandler} />
                        </ButtonWrapper>
                        <DailyAddTitle>{questName}</DailyAddTitle>
                        <DailyAddDescription>{description}</DailyAddDescription>
                    </DailyAddContainer>
                    :
                    <DailyAddWrapper activate={open}>
                        <DailyAddContainer onClick={reverseHandler} hover={true}>
                            <DailyAddTitle>{questName}</DailyAddTitle>
                            <DailyAddDescription>{description}</DailyAddDescription>
                        </DailyAddContainer>
                        <DailyAddBack onClick={reverseHandler}>
                            <button onClick={sendToDailyPlan}>Add Daily</button>
                        </DailyAddBack>
                    </DailyAddWrapper>
            }
        </>
    )
}

export default DailyAdd;