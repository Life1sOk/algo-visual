import styled from 'styled-components';

export const NothingShowContainer = styled.div`
    width: ${props => props.width ? props.width : '100%'};
    height: ${props => props.height ? props.height : '100%'};
    color: ${props => props.color ? props.color : 'white'};
    background-color: rgba(0,0,0, .3);
    border: 1px solid white;
    font-style: italic;

    display: flex;
    justify-content: center;
    align-items: center;
`;