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
    border: 2px solid ${props => props.active === props.title ? 'rgb(255,98,0)' : 'rgb(6,34,60)'};
    border-radius: 20px;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        cursor: pointer;
    }
`;