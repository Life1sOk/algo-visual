import styled from 'styled-components';

export const TextAreaContainer = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 5px;
`;

export const TextAreaDescription = styled.textarea`
    min-height: ${props => props.type === 'big' ? '110px' : '50px'};
    padding: 5px;
    font-size: 16px;
    font-style: italic;
    resize: none;
    border: none;
    ${'' /* border-top: 1px solid grey; */}
    ${'' /* border-bottom: 1px solid grey; */}
    background-color: rgba(255,255,255, .5);

    &:focus {
        outline: none;
    }
`;