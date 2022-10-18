import styled from 'styled-components';

export const CurrentPartContainer = styled.div`
    width: 100%;
    height: 50px;
    border: 3px solid ${props => props.active ? 'rgb(255, 98, 0)' : 'initial'};
    margin-bottom: 10px;
    color: ${props => props.active ? 'rgb(255, 98, 0)' : 'white'};

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        border: 3px solid ${props => props.active ? 'initial' : 'white'};;
        cursor: pointer;
    }
`;