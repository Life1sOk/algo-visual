import styled from 'styled-components';

const DailyStyle = styled.div`
    width: 215px;
    height: 345px;
    background-color: rgb(20, 25, 50);
    padding: 10px;
    flex-shrink: 0;
    border-top: 3px solid white;
    border-bottom: 1px solid white;
    border-radius: 20px 20px 10px 10px;
    overflow-y: scroll;
`;

const ButtonWrapper = styled.div`
    width: 100%;
    /* height: 50px; */
    
    display: flex;
    justify-content: center;
    align-items: center;

    button {
        /* margin-top: 7px; */
        width: 80%;
        height: 36.6px;
        padding: 4px;
        color: rgb(68, 61, 61);
        cursor: pointer;
        border-radius: 3px;
        box-shadow: rgba(27, 31, 35, .1) 0 1px 0;
        font-size: 14px;
        font-weight: 600;
        border: 2px solid rgb(51, 255, 51);
        background-color: rgb(51, 255, 51);

        &:hover {
            color: rgb(68, 61, 61);
            border: 2px solid rgb(51, 255, 51);
            background-color: white;
        }
    }
`;

const ToDo = styled.div`
    margin-top: 16px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`;

DailyStyle.ButtonWrapper = ButtonWrapper;
DailyStyle.ToDo = ToDo;

export default DailyStyle;