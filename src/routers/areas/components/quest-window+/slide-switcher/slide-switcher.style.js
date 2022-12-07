import styled from 'styled-components';

export const SlideSwithcerLink = styled.span`
    position: relative;
    width: 80px;
    height: 80px;
    text-align: center;
    font-size: 18px;
    padding: 5px;
    margin: 2px 0;
    border-radius: 50%;
    background-color: rgb(6,34,60);
    /* border-right: 5px solid ${props => props.active ? 'rgb(255, 98, 0)' : props.done ? 'rgba(0,153,0)' : 'white'};
    border-left: 5px solid ${props => props.active ? 'rgb(255, 98, 0)' : props.done ? 'rgba(0,153,0)' : 'white'}; */
    border: 3px solid ${props => props.active ? 'rgb(255, 98, 0)' : props.done ? 'rgba(0,153,0)' : 'white'};
    color: ${props => props.active ? 'rgb(255, 98, 0)' : props.done ? 'rgba(0,153,0)' : 'white'};

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        cursor: pointer;
    }

    &:before {
        content: '';
        display: ${props => props.before ? 'initial' : 'none'};
        position: absolute;
        width: 80px;
        height: 5px;
        left: -83px;
        background-color: green;
    }

    &:after {
        content: '';
        display: ${props => props.after ? 'initial' : 'none'};
        position: absolute;
        width: 80px;
        height: 5px;
        right: -83px;
        background-color: green;
    }
`;