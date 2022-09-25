import styled from 'styled-components';

export const SwitcherContainer = styled.div`
    width: 90%;
    margin-bottom: 15px;
    border: 2px solid grey;
    border-radius: 10px;
    overflow: hidden;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    min-height: 23px;

    .buttons {
        border: none;

        &:hover {
            cursor: pointer;
        }
    }

    .two {
        border-left: 2px solid grey;
        border-right: 2px solid grey;
    }
`;
