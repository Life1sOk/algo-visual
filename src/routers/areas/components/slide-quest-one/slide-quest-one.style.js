import styled from 'styled-components';

export const SlideSectionContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 465px;
    border-right:2px solid rgba(255,255,102);
    padding-top: 10px;
    background-color: ${props => !props.done ? 'rgb(6, 34, 60)' : 'rgba(0,93,0)'};

    display: flex;
    flex-direction: column;
    ${'' /* justify-content: center; */}
    align-items: center;
    gap: 8px;

    transform: ${props => props.active ? 'none' : 'translateX(1000px)'};
    transition: transform 1s ease-in-out;
`;

export const SlideWrapper = styled.div`
    width: 800px;
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
    justify-content: flex-start;
    align-items: center;
    gap: 7px;
`;

export const SlideDescription = styled.div`
    width: 400px;
    padding: 7px;
`;

export const Buttons = styled.div`
    height: 70px;
    padding: 0px 20px 0 0;

    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
`;