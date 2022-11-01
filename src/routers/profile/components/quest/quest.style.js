import styled from 'styled-components';

export const QuestWrapper = styled.div`
    width: 100%;
    margin: 5px 0;
    border-bottom: .5px solid grey;
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
    height: ${props => !props.state ? '0' : `${props.generatedHeight + 20}px`};
    padding: ${props => !props.state ? '0 5px 0 25px' : '10px 5px 10px 25px'};
    font-size: 16px;
    font-style: italic;
    opacity: .7;
    resize: none;
    border: none;
    border-top: .5px solid grey;
`;