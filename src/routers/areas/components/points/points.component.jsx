import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { deleteAchieve } from "../../../../App/slices/create-quest.slice";
import { chageQuestPoint } from '../../../../App/slices/combined-areas.slice';

import { PointsContainer, Main, ButtonWrapper, PointsTitle, PointsDate, PointBack, PointsWrapper } from './points.style';
import ButtonSd from '../../../../Components/button-sd/button-sd.component';

const Points = ({ data, show, questId }) => {
    const { title, id, untilTime, description, status } = data;
    const [state, setState] = useState(false);
    const dispatch = useDispatch();

    const deletePointHandler = () => dispatch(deleteAchieve(id));

    const reverseHandler = () => setState(!state);

    const setChangedPointStatus = (status) => {
        dispatch(chageQuestPoint({ questId: questId - 1, pointId: id, status }));
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
                            <button onClick={() => setChangedPointStatus('active')}>Activate</button>
                            <button onClick={() => setChangedPointStatus('notActive')}>Deactivate</button>
                        </PointBack>
                    </PointsWrapper>
            }
        </>
    )
}

export default Points;