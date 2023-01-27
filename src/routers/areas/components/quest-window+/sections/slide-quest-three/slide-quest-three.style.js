import styled from 'styled-components';

export const SlideWrapper = styled.div`
    width: 35%;
    height: 100%;
    padding-top: 15px;

    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    gap: 15px;
`;

export const SlideForm = styled.div`
    width: 100%;
    padding: 20px;
    border-top: 3px solid rgb(255 153 90);
    border-bottom: 1px solid rgb(255 153 90);
    border-radius: 13px;
    background-color: rgb(20,25,50);

    display: flex;
    flex-direction: column;
    gap: 10px;

    box-shadow: 1px 0px 27px -6px rgb(255 153 90);
    -webkit-box-shadow: 1px 0px 27px -6px rgb(255 153 90);
    -moz-box-shadow: 1px 0px 27px -6px rgb(255 153 90);
`;

export const PointsContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    padding: 16px;
    /* border: 1px solid white; */
    background-color: rgb(20,25,50);
    overflow-y: scroll;

    box-shadow: 0px 0px 36px 2px rgb(0,0,0) inset;
    -webkit-box-shadow: 0px 0px 36px 2px rgb(0,0,0) inset;
    -moz-box-shadow: 0px 0px 36px 2px rgb(0,0,0) inset;

    display: flex;
    flex-direction: column;
    gap: 10px;
`;