import styled from "styled-components";

export const PathWrapper = styled.div`
    max-width: 220px;

    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const PathContainer = styled.div`
    position: relative;
    width: 170px;
    margin-right: 30px;
    margin-left: 20px;
    flex-shrink: 0;
    text-align: center;
    border-radius: 12px;
    /* border-bottom: ${props => props.active ? '3px solid rgb(255,98,0)' : '3px solid rgb(86,0,173)'}; */
    color: ${props => props.active ? 'rgb(255,98,0)' : 'rgb(86,0,173)'};
    transition: all .2s linear;
`;

export const PathButtonsFront = styled.div`
    position: absolute;
    top: 0;
    right: -23px;

    width: 20px;
    height: 70%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`;

export const PathButtonsFooter = styled.div`
    width: 90%;
    margin: 0 auto;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    align-items: center;
    gap: 10px;
`;

export const PathDescription = styled.div`
    width: 100%;
    height: 59px;
    padding: 5px;
    font-size: 13px;
    font-style: italic;
    background-color: white;
    border-bottom: ${props => props.active ? '3px solid rgb(255,98,0)' : '3px solid rgb(86,0,173)'};
    border-radius: 0 0 12px 12px;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const PathDescriptionWrapper = styled.div`
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    word-wrap: break-word;
    overflow: hidden;
`;

export const PathNumber = styled.div`
    width: 100%;
    height: 21px;
    font-size: 12px;
    border-top: 2px solid ${props => props.active ? 'rgb(255,98,0)' : 'rgb(86,0,173)'};
    border-radius: 12px 12px 0 0;
    padding: 3px;
    background-color: ${props => props.active ? 'rgb(255,98,0)' : 'rgb(86,0,173)'};
    color: white;
`;

export const ProsConsToolsContainer = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
`;

export const ProsAndConsWrapper = styled.ol`
    /* width: 100%; */
    height: fit-content;
    /* margin: 0 auto; */

    /* display: flex; */
`;