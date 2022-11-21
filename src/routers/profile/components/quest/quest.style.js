import styled from 'styled-components';

const QuestStyle = styled.div`
    position: relative;
    width: 100%;
    margin: 5px 0;
    border-bottom: .5px solid grey;

    display: flex;
    flex-direction: column;
`;

export const QuestContainer = styled.div`
    width: 90%;
    min-height: 40px;
    margin: 0 auto;
    color: ${props => props.state ? 'rgb(255,98,0)' : 'initial'};

    display: flex;
    align-items: center;
`;

export const Label = styled.span`
    font-size: 15px;
    margin: 0 auto;
    cursor: pointer;

    text-decoration-line: ${props => !props.done ? 'none' : 'line-through'};
    text-decoration-color: ${props => props.color};
`;

export const Done = styled.h2`
    color: ${props => props.color};

    &:hover {
        cursor: pointer;
    }
`;

const DiscriptionBox = styled.textarea`
    position: absolute;
    top: 40px;
    left: 0;
    width: 100%;
    height: ${props => !props.state ? '0' : `${props.generatedHeight + 20}px`};
    background-color: white;
    padding: 0 5px 0 25px;
    font-size: 14px;
    font-style: italic;
    z-index: 5;
    resize: none;
    border: none;
    border-bottom: ${props => !props.state ? 'none' : `5px solid rgb(255,98,0)`};
    border-radius: 0 0 10px 10px;
    transition: all .2s ease-in-out;
`;

QuestStyle.Discription = DiscriptionBox;

export default QuestStyle;