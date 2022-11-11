import styled from 'styled-components';

export const ColorBallContainer = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 2.5px solid ${props => props.status ? 'rgb(255,98,0)' : 'white'};
    background: ${props => props.color};
`;