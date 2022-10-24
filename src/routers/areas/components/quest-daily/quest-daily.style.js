import styled from 'styled-components';

export const QuestDailyContainer = styled.div`
    width: 253px;
    border-left: 2px solid lightgreen;
    flex-shrink: 0;

    .quest-time {
        font-size: 24px;
        padding: 0 3px 3px 3px;
        text-align: center;
    }
`;

export const QuestDailyDatas = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const QuestDay = styled.div`
    margin: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid white;
`;