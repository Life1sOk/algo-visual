import styled from 'styled-components';

export const SlideSectionContainer = styled.div`
    border-right: 2px solid rgba(255,255,102);
    width: 800px;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    transform: translateX(700px);
`;

export const InDescWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    gap: 60px;

    width: 90%;
    margin-top: 10px;
`;

export const SlideIn = styled.div`
    width: 200px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
`;

export const Date = styled.div`
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const DisplayPoints = styled.div`
    width: 90%;
    margin-top: 15px;
    padding: 15px 0;
    border-top: 1px solid grey;
    border-bottom: 1px solid grey;
    overflow: auto;

    display: flex;
    align-items: center;
    gap: 10px;
`;

export const SlideDescription = styled.div`
    width: 400px;
    padding: 7px;
`;

export const Quote = styled.q`
    height: 70px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid grey;
`;

export const Ul = styled.ul`
    padding: 10px;
    margin-left: 15px;

    li {
        padding: 5px;
    }
`;

export const Buttons = styled.div`
    width: 100%;
    padding: 15px 40px 15px 15px;

    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
`;
