import styled from 'styled-components';

export const QuestWrapper = styled.div`
    width: 100%;
    padding: 10px;
    border-bottom: 1px solid grey;
    overflow: hidden;
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

export const DiscriptionBox = styled.div`
    display: ${props => props.state ? 'initial' : 'none'};
    margin: 0 10px;
    font-style: italic;
    opacity: .7;
`;