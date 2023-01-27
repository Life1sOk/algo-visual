import styled from "styled-components";

export const SlideWrapperLayout = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    background-color: ${props => !props.done ? 'rgb(6, 34, 60)' : 'rgba(0,93,0)'};

    display: ${props => !props.active ? 'none' : 'flex'};
    align-items: center;
    justify-content: space-around;
`;

export const MainContainerLayout = styled.div`
    width: ${({width}) => width ? `${width}%` : '70%'};
    height: 100%;
    padding: 10px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const StepsLayout = styled.div`
    position: relative;
    /* width: ${({width}) => width ? `${width}%` : '30%'}; */
    width: 210px;
    height: 100%;
    padding: 20px 10px 10px 10px;
    background-color: rgb(20,25,50);
    overflow: auto;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    ${props => props.side === 'left' ? 
        `box-shadow: 11px -4px 26px 2px rgb(0,0,0) inset;
        -webkit-box-shadow: 11px -4px 26px 2px rgb(0,0,0) inset;
        -moz-box-shadow: 11px -4px 26px 2px rgb(0,0,0) inset;`
    : 
        `box-shadow: -11px -4px 26px 2px rgb(0,0,0) inset;
        -webkit-box-shadow: -11px -4px 26px 2px rgb(0,0,0) inset;
        -moz-box-shadow: -11px -4px 26px 2px rgb(0,0,0) inset;`
    }
`;

export const FlexSpaceBetweenWrapper = styled.div`
    width: 100%;
    flex-shrink: 0;

    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const DoneWindow = styled.div`
    display: ${({state}) => !state ? 'none' : 'initial'};
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0, .2);
    z-index: 10;
`;