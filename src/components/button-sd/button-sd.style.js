import styled from 'styled-components';

export const ButtonSdDelete = styled.button`
    position: relative;
    width: 50px;
    height: 50px;
    background-color: rgb(255, 51, 51);
    border: none;
    padding: 0;
    border-radius: 50%;
    transform: scale(.4);

    &:hover {
        cursor: pointer;
    }

    &:active {
        background-color: rgb(255, 102, 102);
    }

    &::after {
        content: '';
        width: 30px;
        height: 4px;
        background-color: black;
        border-radius: 5px;
        transform: rotate(45deg);

        position: absolute;
        top: 23px;
        left: 10px;
    }

    &::before {
        content: '';
        width: 30px;
        height: 4px;
        background-color: black;
        border-radius: 5px;
        transform: rotate(-45deg);

        position: absolute;
        top: 23px;
        left: 10px;
    }
`;

export const ButtonSdShrink = styled.button`
    position: relative;
    width: 50px;
    height: 50px;
    background-color: rgb(0, 255, 0);
    border: none;
    padding: 0;
    border-radius: 50%;
    transform: rotate(45deg) scale(.4);

    &:hover {
        cursor: pointer;
    }

    &:active {
        background-color: rgb(102, 255, 102);
    }

    &::after {
        content: '';
        width: 0; 
        height: 0; 
        border-top: 15px solid transparent;
        border-bottom: 15px solid transparent; 
        border-left: 15px solid black;

        position: absolute;
        top: 10px;
        left: 9px;
    }

    &::before {
        content: '';
        width: 0; 
        height: 0; 
        border-top: 15px solid transparent;
        border-bottom: 15px solid transparent; 
        border-right: 15px solid black;

        position: absolute;
        bottom: 10px;
        right: 9px;
    }
`;

export const ButtonSdFix = styled.button`
    position: relative;
    width: 50px;
    height: 50px;
    background-color: rgb(255, 255, 51);
    border: none;
    padding: 0;
    border-radius: 50%;
    transform: scale(.4);

    &:hover {
        cursor: pointer;
    }

    &:active {
        background-color: rgb(255, 205, 51);
    }

    ${'' /* &::after {
        content: '';
        width: 30px;
        height: 6px;
        border-radius: 5px;
        background-color: black;

        position: absolute;
        bottom: 15px;
        left: 10px;
    } */}

    &::after {
        content: 'F';
        color: black;
        font-size: 25px;
        font-weight: bold;
        width: 100%;
        height: 50%;
        border-radius: 5px;

        position: absolute;
        bottom: 12.5px;
        left: 0;
    }
`;