import styled from 'styled-components';

export const CurrentPartContainer = styled.div`
    width: 100%;
    height: 70px;
    border: 3px solid ${props => props.active ? 'white' : 'initial'};
    margin-bottom: 10px;
    background-color: rgba(0, 102, 255, 0.7);

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        border: 3px solid white;
        cursor: pointer;
    }
`;