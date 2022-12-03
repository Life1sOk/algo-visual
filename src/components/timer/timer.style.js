import styled from 'styled-components';

export const Progress = styled.div`
    width: 100%;
    height: ${props => `${props.time}%`};
    background-color: rgb(255, 51, 51);

    transition: height 1s linear;
`;