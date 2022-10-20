import styled from 'styled-components';

export const SlideSectionContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    border-right: 2px solid rgba(255,255,102);
    background-color: rgb(6, 34, 60);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

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
    gap: 10px;
`;

export const SlideDescription = styled.div`
    width: 400px;
    padding: 7px;
`;

export const Quote = styled.q`
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    border-bottom: 1px solid grey;
`;

export const Ul = styled.ul`
    padding: 10px;

    li {
        padding: 5px;
    }
`;

export const Buttons = styled.div`
    height: 90px;
    padding: 20px 20px 0 0;

    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
`;