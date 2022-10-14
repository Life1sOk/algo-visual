import styled from 'styled-components';

export const ItemsItemContainer = styled.div`
    width: 100%;
    padding-top: 10px;
    border-bottom: 1px solid grey;
    background-color: white;

    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    input {
        width: 15%;
        margin: auto;
    }

    span {
        width: 85%;
        max-height: 62px;
        padding-left: 8px;
        margin-bottom: 5px;
        overflow: scroll;

        border-left: 1px solid grey;
    }
`;