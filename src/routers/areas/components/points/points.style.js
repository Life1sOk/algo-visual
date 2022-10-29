import styled from 'styled-components';

export const PointsContainer = styled.div`
    position: relative;
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
        width: 100%;
        font-size: 20px;
        padding: 4px 20px;
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
    width: 180px;
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

export const ButtonWrapper = styled.div`
    position: absolute;
    top: 0;
    right: 0;
`;