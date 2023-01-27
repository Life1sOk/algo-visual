import styled from "styled-components";

export const PointWrapper = styled.div`
    width: 100%;

    display: flex;
    justify-content: space-between;

    animation-name: ${({delay}) => `points${delay}`};
    animation-duration: ${({delay}) => `${0.881 + delay * 0.119}s`};
    animation-timing-function: ease-in-out;

    @keyframes ${({delay}) => `points${delay}`} {
        from {
            transform: ${({delay}) => `translateX(${delay * 30 + 222}px)`};
        };

        to {
            transform: translateX(0px);
        };
    }
`;

export const PointContainer = styled.li`
    width: 90%;
    min-height: 32px;
    /* background-color: white; */
    color: white;
    /* border-left: 5px solid rgb(251,199,87); */
    /* border-right: 1px solid rgb(251,199,87); */
    /* border-left: 1px solid grey; */
    padding: 2px 7.5px 7.5px 5px;
    /* border-right: 2px solid rgb(255 153 90);
    border-top: 1px solid rgb(255 153 90); */
    border-bottom: 1px solid rgb(255 153 90);
    border-radius: 7px;
    overflow: hidden;
    flex-shrink: 0;

    display: flex;
    align-items: flex-end;
`;

export const DiscriptionBox = styled.textarea`
    /* display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: scroll; */

    width: 100%;
    height: ${props => `${props.generatedHeight}px`}; 
    background-color: inherit;
    font-size: 14px;
    font-style: italic;
    resize: none;
    border: none;
    color: white;
    flex-shrink: 0;
`;

export const PointSetting = styled.div`
    width: 10%;
    height: 100%;
    background-color: rgb(251,199,87);
    border-radius: 0 15px 15px 0;

    display: flex;
    justify-content: center;
    align-items: flex-start;
`;

export const CheckboxWrapper = styled.div`
    margin-top: 5px;
`;