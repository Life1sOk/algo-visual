import styled from 'styled-components';

export const ButtonSdPlus = styled.button`
    position: relative;
    width: 25px;
    height: 25px;
    background-color: ${props => props.background ? props.background : 'rgb(51, 255, 51)'};
    border: none;
    padding: 0;
    border-radius: 50%;
    transform: ${props => props.scale ? `scale(.${props.scale})` : 'scale(.9)'};

    &:hover {
        cursor: pointer;
    }

    &:active {
        background-color: rgb(255, 102, 102);
        opacity: ${props => props.background ? '.9' : 'initial'};
    }

    &::after {
        content: '';
        width: 15px;
        height: 2px;
        background-color: ${props => props.color ? props.color : 'black'};
        border-radius: 5px;
        /* transform: rotate(45deg); */

        position: absolute;
        top: 11.5px;
        left: 5px;
    }

    &::before {
        content: '';
        width: 15px;
        height: 2px;
        background-color: ${props => props.color ? props.color : 'black'};
        border-radius: 5px;
        transform: rotate(-90deg);

        position: absolute;
        top: 11.5px;
        left: 5px;
    }
`;

export const ButtonSdDelete = styled.button`
    position: relative;
    width: 25px;
    height: 25px;
    background-color: ${props => props.background ? props.background : 'rgb(255, 51, 51)'};
    border: none;
    padding: 0;
    border: 1px solid ${props => props.color ? props.color : 'black'};
    border-radius: 50%;
    transform: ${props => props.scale ? `scale(.${props.scale})` : 'scale(.9)'};

    &:hover {
        cursor: pointer;
    }

    &:active {
        opacity: .5;
    }

    &::after {
        content: '';
        width: 15px;
        height: 2px;
        background-color: ${props => props.color ? props.color : 'black'};
        border-radius: 5px;
        transform: rotate(45deg);

        position: absolute;
        top: 10.5px;
        left: 4px;
    }

    &::before {
        content: '';
        width: 15px;
        height: 2px;
        background-color: ${props => props.color ? props.color : 'black'};
        border-radius: 5px;
        transform: rotate(-45deg);

        position: absolute;
        top: 10.5px;
        left: 4px;
    }
`;

export const ButtonSdShrink = styled.button`
    position: relative;
    width: 25px;
    height: 25px;
    background-color: rgb(0, 255, 0);
    border: none;
    padding: 0;
    border-radius: 50%;
    transform: rotate(45deg) scale(.9);

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
        border-top: 7.5px solid transparent;
        border-bottom: 7.5px solid transparent; 
        border-left: 7.5px solid black;

        position: absolute;
        top: 5px;
        left: 4.5px;
    }

    &::before {
        content: '';
        width: 0; 
        height: 0; 
        border-top: 7.5px solid transparent;
        border-bottom: 7.5px solid transparent; 
        border-right: 7.5px solid black;

        position: absolute;
        bottom: 5px;
        right: 4.5px;
    }
`;

export const ButtonSdFix = styled.button`
    position: relative;
    width: 25px;
    height: 25px;
    background-color: rgb(255, 255, 51);
    border: none;
    padding: 0;
    border-radius: 50%;
    transform: scale(.9);

    &:hover {
        cursor: pointer;
    }

    &:active {
        background-color: rgb(255, 205, 51);
    }

    &::after {
        content: 'F';
        color: black;
        font-size: 20px;
        width: 100%;
        height: 100%;
        border-radius: 2.5px;

        position: absolute;
        top: 2px;
        left: 0;
    }
`;

export const ButtonSdReplace = styled.img`
    position: relative;
    width: 25px;
    height: 25px;
    /* background-color: ${props => props.background ? props.background : 'rgb(51, 255, 51)'}; */
    border: none;
    padding: 0;
    border-radius: 50%;
    transform: ${props => props.scale ? `scale(.${props.scale})` : 'scale(.9)'};

    &:hover {
        cursor: pointer;
    }

    &:active {
        opacity: .5;
    }
`;