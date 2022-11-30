import styled from 'styled-components';

export const TextAreaContainer = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 5px;

    span {
        font-size: 15px;
    }
`;

export const TextAreaDescription = styled.textarea`
    min-height: ${props => props.type === 'big' ? '87px' : '45px'};
    padding: 3px;
    font-size: 15px;
    font-style: italic;
    resize: none;
    border: none;
    background-color: rgba(255,255,255, .5);
    border-radius: 5px;

    &:focus {
        outline: none;
    }
`;