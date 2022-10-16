import styled from 'styled-components';

export const QuestWrapper = styled.div`
    width: 100%;
    padding: 5px 0;
    border-bottom: 1px solid grey;
    overflow: hidden;

    display: flex;
    flex-direction: column;
`;

export const QuestContainer = styled.div`
    width: 90%;
    min-height: 40px;
    margin: 0 auto;

    display: flex;
    align-items: center;
`;

export const Label = styled.label`
    margin: 0 auto;
    cursor: pointer;

    text-decoration-line: ${props => !props.done ? 'none' : 'line-through'};
    text-decoration-color: ${props => props.color};
    text-decoration-thickness: 2.5px;
`;

export const Done = styled.h2`
    color: ${props => props.color};

    &:hover {
        cursor: pointer;
    }
`;

export const DiscriptionBox = styled.textarea`
    display: ${props => props.state ? 'initial' : 'none'};

    padding: 10px 5px 10px 25px;
    font-size: 16px;
    font-style: italic;
    opacity: .7;
    resize: none;
    border: none;
    border-top: 1px solid grey;
`;