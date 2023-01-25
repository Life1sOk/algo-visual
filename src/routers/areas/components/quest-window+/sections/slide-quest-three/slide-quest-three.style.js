import styled from 'styled-components';

export const SlideWrapper = styled.div`
    width: 35%;
    height: 100%;
    padding: 15px 15px 0 15px;

    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    gap: 15px;
`;

export const SlideForm = styled.div`
    width: 100%;
    padding: 20px;
    border-top: 3px solid rgb(251,199,87);
    border-bottom: 1px solid rgb(251,199,87);
    border-radius: 13px;
    background-color: rgb(20,25,50);

    display: flex;
    flex-direction: column;
    gap: 10px;

    box-shadow: 1px 0px 27px -6px rgb(251,199,87);
    -webkit-box-shadow: 1px 0px 27px -6px rgb(251,199,87);
    -moz-box-shadow: 1px 0px 27px -6px rgb(251,199,87);
`;