import styled from 'styled-components';

export const ColorBallContainer = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 1px solid white;
    background: ${props => props.color};
`;