import styled from "styled-components";

export const SettingMenuStyle = styled.div`
    width: 215px;
    margin-left: 20px;
    margin-bottom: 10px;
    
    display: flex;
    gap: 15px;
`;

export const MenuSwitcher = styled.div`
    width: 100px;
    height: 55px;
    padding: 7px;
    color: white;
    background-color: rgb(6,34,60);
    /* border: 1px solid rgb(6,34,60); */
    border: 1px solid orange;
    border-radius: 20px;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        cursor: pointer;
    }
`;

export const BottomHat = styled.div`
    width: 100%;
    height: 20px;
    background-color: rgb(6,34,60);

    border-radius: 20px 20px 0 0;
`;