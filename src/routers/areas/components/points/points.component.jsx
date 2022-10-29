import React from "react";

import { useDispatch } from "react-redux";
import { deleteAchieve } from "../../../../App/slices/create-quest.slice";

import { PointsContainer, Main, ButtonWrapper } from './points.style';
import ButtonSd from '../../../../Components/button-sd/button-sd.component';

const Points = ({ data, show }) => {
    const { title, id, untilTime, description } = data;
    const dispatch = useDispatch();

    const deletePointHandler = () => dispatch(deleteAchieve(id));

    return (
        <PointsContainer>
            {
                show ?
                    <ButtonWrapper>
                        <ButtonSd type='delete' background='white' onClick={deletePointHandler} />
                    </ButtonWrapper> :
                    null
            }
            <span className="points-title">{title}</span>
            <span className="points-date">{`Date: ${untilTime}`}</span>
            <Main>{description}</Main>
        </PointsContainer>
    )
}

export default Points;