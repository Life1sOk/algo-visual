import styled from 'styled-components';

export const QuestWrapper = styled.div`
    width: 100%;
    padding: 10px;
    border-bottom: 1px solid grey;
    overflow: hidden;

    display: flex;
    flex-direction: column;
`;

export const QuestContainer = styled.div`
    width: 90%;
    min-height: 40px;
    margin: 0 auto;
    padding: 10px;

    display: flex;
    align-items: center;

    .quest {
        margin-left: 30px;
        cursor: pointer;
    }
`;

export const DiscriptionBox = styled.textarea`
    display: ${props => props.state ? 'initial' : 'none'};

    padding: 10px 5px 5px 25px;
    font-size: 16px;
    font-style: italic;
    opacity: .7;
    height: 110px;
    resize: none;
    border: none;
    border-top: 1px solid grey;
`;