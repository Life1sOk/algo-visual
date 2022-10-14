import styled from 'styled-components';

export const CreateTodoContainer = styled.div`
    width: ${props => props.smallToBig ? '644px' : '322px'};
    ${'' /* width: 322px; */}
    color: white;
    border: 7px solid rgb(98, 98, 98);
    border-radius: 20px;
    background-color: rgba(169, 169, 169, .5);
    overflow: hidden;
    z-index: 10;

    display: flex;
    flex-direction: column;
    ${'' /* transform: scale(1.5); */}
    transition: all 2s ease-in-out;
`;

export const CardTitle = styled.h2`
    height: 35px;
    background-color: rgb(98, 98, 98);
    text-align: center;
    padding-bottom: 5px;
`;

export const QuestTitle = styled.input`
    height: 41px;
    padding: 10px;
    font-size: 18.73px;
    border: none;

    &:focus {
        background-color: rgb(241, 255, 158);
        outline: none;
    }
`;

export const TimeContainer = styled.div`
    width: 100%;
    height: 35px;
    padding: 2px 10px;
    background-color: lightcoral;

    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Main = styled.div`
    width: 100%;
    height: 289px;
    padding: 10px;
    background-color: lightgreen;
    overflow: scroll;
`;

export const Footer = styled.div`
    height: 30px;
    width: 100%;
    background-color: rgb(98, 98, 98);

    display: grid;
    grid-template-columns: repeat(2, 1fr);
`;