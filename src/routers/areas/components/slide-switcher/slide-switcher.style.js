import styled from 'styled-components';

export const SlideSwithcerLink = styled.span`
    width: 80%;
    text-align: center;
    font-size: 22px;
    padding: 5px;
    margin: 10px 0;
    border-right: 1px solid ${props => props.active ? 'rgb(255, 98, 0)' : props.done ? 'rgba(0,153,0)' : 'white'};
    border-left: 1px solid ${props => props.active ? 'rgb(255, 98, 0)' : props.done ? 'rgba(0,153,0)' : 'white'};
    color: ${props => props.active ? 'rgb(255, 98, 0)' : props.done ? 'rgba(0,153,0)' : 'white'};

    &:hover {
        cursor: pointer;
    }
`;