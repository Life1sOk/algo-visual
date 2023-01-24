import styled from 'styled-components';

export const SlideInContainer = styled.div`
    width: 300px;
    height: fit-content;
    padding: 15px;
    border: 1px solid rgb(86,0,173);
    background-color: rgb(20,25,50);
    
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;

    box-shadow: 1px 0px 27px -6px rgb(178,102,255);
    -webkit-box-shadow: 1px 0px 27px -6px rgb(178,102,255);
    -moz-box-shadow: 1px 0px 27px -6px rgb(178,102,255);
`;