import styled from 'styled-components';

export const QuestsSectionDisplay = styled.div`
    width: 100%;
    min-height: 371px;
    border-bottom: 1px solid white;
    border-radius: 0 0 10px 10px;
    padding: 0 0 25px 15px;

    display: flex;
    justify-content: center;
    /* align-items: center; */
    flex-direction: ${props => props.activeType === 'done' ? 'raw' : 'column'};
    flex-wrap: wrap;
    gap: ${props => props.activeType === 'done' ? '40px' : '40px'};
`;