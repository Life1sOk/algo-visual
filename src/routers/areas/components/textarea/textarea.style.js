import styled from 'styled-components';

export const TextAreaContainer = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 5px;
`;

export const TextAreaDescription = styled.textarea`
    min-height: ${props => props.type === 'big' ? '87px' : '50px'};
    padding: 5px;
    font-size: 16px;
    font-style: italic;
    resize: none;
    border: none;
    background-color: rgba(255,255,255, .5);
    border-radius: 5px;

    &:focus {
        outline: none;
    }
`;