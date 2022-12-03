import styled from 'styled-components';

export const SlideSectionContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    /* border-right: 2px solid rgba(255,255,102); */
    width: 811px;
    height: 100%;
    background-color: ${props => !props.done ? 'rgb(6, 34, 60)' : 'rgba(0,93,0)'};

    display: ${props => !props.active ? 'none' : 'flex'};
    flex-direction: column;
    align-items: center;

    transition: transform 1s ease-in-out;

    h2 {
        padding: 10px 0 0 0;
    }
`;

export const SlideWrapper = styled.div`
    width: 100%;
    height: 208.5px;
    margin-top: 10px;

    display: flex;
    justify-content: space-around;
`;

export const SlideInContainer = styled.div`
    width: 300px;
    padding: 7px;
    flex-shrink: 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;

export const SlideInWrapper = styled.div`
    width: 200px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
`;

export const SlideDescription = styled.div`
    width: 400px;
    padding: 7px;
`;

export const DisplayPoints = styled.div`
    width: 90%;
    min-height: 152px;
    margin-top: 10px;
    padding: 10px 0;
    border-top: 1px solid grey;
    overflow: auto;

    display: flex;
    align-items: center;
    gap: 10px;
`;

export const Buttons = styled.div`
    width: 100%;
    padding: 0 40px 0 0;

    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
`;