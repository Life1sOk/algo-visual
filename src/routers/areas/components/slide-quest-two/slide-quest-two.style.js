import styled from 'styled-components';

export const SlideSectionContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    border-right: 2px solid rgba(255,255,102);
    width: 800px;
    height: 100%;
    background-color: ${props => !props.done ? 'rgb(6, 34, 60)' : 'rgba(0,93,0)'};

    display: flex;
    flex-direction: column;
    align-items: center;

    transform: ${props => props.active ? 'none' : 'translateX(1000px)'};
    transition: transform 1s ease-in-out;

    h2 {
        padding: 10px 0 0 0;
    }
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

export const Buttons = styled.div`
    width: 100%;
    padding: 15px 40px 15px 15px;

    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
`;