import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { selectAuthUid } from "../../App/slices/auth.slice";
import { deleteAchieve } from "../../App/slices/create-quest.slice";
import { chageQuestPoint } from '../../App/slices/combined-areas.slice';
import {  selectAreas } from "../../App/slices/areas-slice";
import { setActivePoint, deleteActivePoint } from "../../utils/firebase/firebase";

import { PointsContainer, Main, ButtonWrapper, PointsTitle, PointsDate, PointBack, PointsWrapper } from './points.style';
import ButtonSd from '../button-sd/button-sd.component';

const Points = ({ data, show, questIndex, questTitle }) => {
    const { title, id, untilTime, description, status } = data;
    const [state, setState] = useState(false);
    const dispatch = useDispatch();
    const uid = useSelector(selectAuthUid);

    const deletePointHandler = () => dispatch(deleteAchieve(id));

    const reverseHandler = () => setState(!state);

    const check = useSelector(selectAreas);

    const setChangedPointStatus = (status) => {
        const payload = { pointId: id, questIndex, status, data, questTitle };
        console.log(check[questTitle].quests[questIndex].quest.achieve)
        // if (status) {
        //     dispatch(chageQuestPoint(payload));
        //     setActivePoint(uid, data);
        // } else {
        //     dispatch(chageQuestPoint(payload));s
        //     deleteActivePoint(uid, data);
        // }
    };

    return (
        <>
            {
                show ?
                    <PointsContainer>
                        <ButtonWrapper>
                            <ButtonSd type='delete' background='white' onClick={deletePointHandler} />
                        </ButtonWrapper>
                        <PointsTitle>{title}</PointsTitle>
                        <PointsDate>{`Date: ${untilTime}`}</PointsDate>
                        <Main>{description}</Main>
                    </PointsContainer>
                    :
                        <PointsWrapper activate={state}>
                            <PointsContainer onClick={reverseHandler} status={status}>
                                <PointsTitle>{title}</PointsTitle>
                                <PointsDate>{`Date: ${untilTime}`}</PointsDate>
                                <Main>{description}</Main>
                            </PointsContainer>
                            <PointBack onClick={reverseHandler}>
                                <button onClick={() => setChangedPointStatus(true)}>Activate</button>
                                <button onClick={() => setChangedPointStatus(false)}>Deactivate</button>
                            </PointBack>
                        </PointsWrapper>
            }
        </>
    )
}

export default Points;