import styled from 'styled-components';

export const CurrentPartContainer = styled.div`
    width: 270px;
    height: 50px;
    border-top: 3px solid ${props => props.active ? 'rgb(255, 98, 0)' : 'initial'};
    border-bottom: 3px solid ${props => props.active ? 'rgb(255, 98, 0)' : 'initial'};
    border-radius: 10px;
    color: ${props => props.active ? 'rgb(255, 98, 0)' : 'white'};

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        border-top: 3px solid ${props => props.active ? 'initial' : 'white'};
        border-bottom: 3px solid ${props => props.active ? 'initial' : 'white'};
        cursor: pointer;
    }
`;