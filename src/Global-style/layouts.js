import styled from 'styled-components';

export const PageLayout = styled.div`
    width: 1380px;
    height: 100%;
    margin: 7px auto 0 auto;

    display: flex;
`;

export const MainLayout = styled.div`
    width: 100%;
    height: 200vh;
    padding: 0 15px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
`;

export const AsideLayout = styled.div`
    width: auto;
    padding: 0 10px;
    border-right: 2px solid #30363d;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const CenterLayout = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
