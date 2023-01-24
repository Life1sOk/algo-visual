import styled from 'styled-components';

export const TextAreaContainer = styled.div`
    width: 100%;
    flex-shrink: 0;

    display: flex;
    flex-direction: column;
    gap: 5px;

    span {
        font-size: 13px;
        margin-left: 3px;
    }
`;

export const TextAreaDescription = styled.textarea`
    color: white;
    min-height: ${props => props.type === 'big' ? '87px' : '45px'};
    padding: 3px;
    font-size: 14px;
    font-style: italic;
    resize: none;
    border-radius: 5px;
    background-color: rgba(0,0,0, .2);
    border: 1px solid rgba(192,192,192, .2);

    &:focus {
        outline: none;
        border: 1px solid rgb(77,77,255);
    }
`;