import styled from 'styled-components';

export const QuestDailyContainer = styled.div`
    width: 253px;
    flex-shrink: 0;

    .quest-time {
        font-size: 24px;
        padding: 0 3px 3px 3px;
        text-align: center;
    }
`;

export const QuestDailyButton = styled.div`
    width: 100%;
    height: 50px;
    
    display: flex;
    justify-content: center;
    align-items: center;

    button {
        margin-top: 7px;
        width: 80%;
        height: 36.6px;
        padding: 4px;
        color: rgb(68, 61, 61);
        cursor: pointer;
        border-radius: 3px;
        box-shadow: rgba(27, 31, 35, .1) 0 1px 0;
        font-size: 14px;
        font-weight: 600;
        border: 2px solid rgb(51, 255, 51);
        background-color: rgb(51, 255, 51);

        &:hover {
            color: rgb(68, 61, 61);
            border: 2px solid rgb(51, 255, 51);
            background-color: white;
        }
    }
`;

export const QuestDailyDatas = styled.div`
    margin-top: 16px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`;