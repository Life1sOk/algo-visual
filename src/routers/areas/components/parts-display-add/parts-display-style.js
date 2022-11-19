import styled from 'styled-components';

export const PartsDisplayAddContainer = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    gap: 30px;
`;

export const PartsDisplayAddLeft = styled.div`
    width: 275px;
    height: 100%;
    flex-shrink: 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
`;

export const PartsDisplayAddRight = styled.div`
    width: 100%;
    height: 100%;
    padding: 0 10px 10px 10px;

    display: flex;
    flex-direction: column;
    align-items: center;

    .bla {
        height: 50px;
        width: 100%;
        border: 2px solid red;
    }
`;

export const PartsWrapper = styled.div`
    width: 100%;
    height: 360px;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    align-items: center;
    gap: 15px;
`;