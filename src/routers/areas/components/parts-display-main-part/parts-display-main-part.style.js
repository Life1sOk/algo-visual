import styled from 'styled-components';

export const PartsDisplayMainPartContainer = styled.div`
    width: 100%;
    height: 151px;
    border: 1px solid white;
    border-radius: 10px;
    padding: 15px;
    background-color: rgba(255,255,255, .1);

    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const PartsDisplayMainPartTitle = styled.div`
    width: 100%;
    font-size: 20px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
`;

export const PartsDisplayMainPartTotal = styled.div`
    width: 100%;
    font-size: 14px;

    .totalquest {
        margin-left: 10px;
        font-size: 16px;
        color: rgb(0,255,0);
    }
`;

export const PartsDisplayMainPartDescription = styled.div`
    width: 100%;
    font-size: 14px;
    font-style: italic;
`;