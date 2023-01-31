import styled from 'styled-components';

export const SlideSwithcerLink = styled.span`
    position: relative;
    width: 50px;
    height: 50px;
    text-align: center;
    font-size: 18px;
    padding: 5px;
    margin: 2px 0;
    border-radius: 50%;
    background-color: rgb(6,34,60);
    border: 3px solid ${props => props.active ? 'rgb(255, 98, 0)' : props.done ? 'rgba(0,153,0)' : 'white'};
    color: ${props => props.active ? 'rgb(255, 98, 0)' : props.done ? 'rgba(0,153,0)' : 'white'};

    display: flex;
    justify-content: center;
    align-items: center;

    &:before {
        content: '';
        display: ${props => props.before ? 'initial' : 'none'};
        position: absolute;
        width: 93px;
        height: 5px;
        left: -96px;
        background-color: green;
    }

    &:after {
        content: '';
        display: ${props => props.after ? 'initial' : 'none'};
        position: absolute;
        width: 93px;
        height: 5px;
        right: -96px;
        background-color: green;
    }
`;