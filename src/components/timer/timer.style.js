import styled from 'styled-components';

export const TimerContainer = styled.div`
    height: 100%;
    width: 10px;
    background-color: white;
    border-radius: 10px;
    overflow: hidden;

    display: flex;
    align-items: flex-end;
    justify-content: center;
`;

export const Progress = styled.div`
    width: 100%;
    height: ${props => `${props.have}%`};
    /* height: 80%; */

    background-color: greenyellow;
`;