import styled from 'styled-components';

export const SlideFormContainer = styled.div`
    width: 100%;
    margin: 10px 0;

    display: flex;
    justify-content: space-around;
    align-items: flex-start;
`;

export const SlideForm = styled.div`
    width: 230px;
    padding: 20px;
    background-color: rgb(20,25,50);
    border-top: 3px solid rgb(86,0,173);
    border-bottom: 1px solid rgb(86,0,173);
    border-radius: 13px;

    display: flex;
    flex-direction: column;
    gap: 10px;

    box-shadow: 1px 0px 27px -6px rgb(178,102,255);
    -webkit-box-shadow: 1px 0px 27px -6px rgb(178,102,255);
    -moz-box-shadow: 1px 0px 27px -6px rgb(178,102,255);
`;