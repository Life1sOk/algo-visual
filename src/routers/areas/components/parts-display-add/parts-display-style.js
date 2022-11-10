import styled from 'styled-components';

export const PartsDisplayAddContainer = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: space-around;
    gap: 10px;
`;

export const PartsDisplayAddLeft = styled.div`
    width: 40%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
`;

export const PartsDisplayAddRight = styled.div`
    width: 50%;
    height: 100%;
    padding: 0 10px 10px 10px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;

    .bla {
        height: 50px;
        width: 100%;
        border: 2px solid red;
    }
`;