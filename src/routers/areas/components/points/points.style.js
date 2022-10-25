import styled from 'styled-components';

export const PointsContainer = styled.div`
    height: 150px;
    flex-shrink: 0;
    border: 1px solid blue;
    border-radius: 12px;
    overflow: hidden;
    text-align: center;
    background-color: white;

    display: flex;
    flex-direction: column;

    .points-title {
        font-size: 20px;
        padding: 4px;
        background-color: blue;
    }

    .points-date {
        font-size: 14px;
        padding: 3px;
        border-bottom: 1px solid blue;
        color: blue;
        margin: 0 10px;
    }
`;

export const Main = styled.span`
    width: 170px;
    padding: 5px;
    margin: auto 0;
    font-size: 16px;
    font-style: italic;
    resize: none;
    border: none;
    background-color: initial;
    text-align: center;
    color: blue;
`;