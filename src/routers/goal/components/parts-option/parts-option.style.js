import styled from 'styled-components';

export const PartsOptionSelect = styled.select`
    background-color: rgba(0,0,0, .2);
    padding: 7px;
    color: white;
    border: none;
    border: 1px solid rgba(192,192,192, .2);
    border-radius: 5px;
    /* outline: none; */

    &:focus {
        outline: none;
        border: 1px solid rgb(77,77,255);
    }

    &:hover {
        cursor: pointer;
    }
`;