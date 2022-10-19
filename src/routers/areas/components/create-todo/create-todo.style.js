import styled from 'styled-components';

export const CreateTodoContainer = styled.div`
    width: 100%;
    min-width: 218.5px;
    color: white;
    border: 2px solid rgb(98, 98, 98);
    border-radius: 20px;
    background-color: rgba(51, 51, 255, .5);
    overflow: hidden;
    z-index: 10;

    display: flex;
    flex-direction: column;
    align-items: center;
    ${'' /* transform: scale(1.5); */}
    transition: all 1s ease-in-out;
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
