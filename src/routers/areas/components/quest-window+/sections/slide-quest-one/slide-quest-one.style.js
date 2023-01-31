import styled from 'styled-components';

export const SlideInContainer = styled.div`
    width: 300px;
    height: fit-content;
    padding: 15px;
    background-color: rgb(20,25,50);
    transition: all .3s linear;
    border-top: 3px solid ${({color}) => color};
    border-bottom: 1px solid ${({color}) => color};
    border-radius: 20px;
    
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;

    box-shadow: 1px 0px 27px -6px ${({color}) => color};
    -webkit-box-shadow: 1px 0px 27px -6px ${({color}) => color};
    -moz-box-shadow: 1px 0px 27px -6px ${({color}) => color};
`;