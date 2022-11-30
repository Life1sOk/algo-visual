import styled from 'styled-components';

export const SlideSwithcerLink = styled.span`
    width: 80%;
    text-align: center;
    font-size: 22px;
    padding: 5px;
    margin: 10px 0;
    border-radius: 20px;
    border-right: 5px solid ${props => props.active ? 'rgb(255, 98, 0)' : props.done ? 'rgba(0,153,0)' : 'white'};
    border-left: 5px solid ${props => props.active ? 'rgb(255, 98, 0)' : props.done ? 'rgba(0,153,0)' : 'white'};
    color: ${props => props.active ? 'rgb(255, 98, 0)' : props.done ? 'rgba(0,153,0)' : 'white'};

    &:hover {
        cursor: pointer;
    }
`;