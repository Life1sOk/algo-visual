import styled from 'styled-components';

export const WindowContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0, .7);
    z-index: 100;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const BlackBox = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
`;

export const Content = styled.div`
    z-index: 101;
`;