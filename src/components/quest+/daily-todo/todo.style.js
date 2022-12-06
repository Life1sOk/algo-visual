import styled from 'styled-components';

const TodoStyle = styled.div`
    transform-style: preserve-3d;
    transform: ${props => !props.activate ? 'rotateY(0deg)' : 'rotateY(180deg)'};
    transition: transform 0.4s ease-in-out;
`;

const Front = styled.div`
    position: relative;
    width: 190px;
    height: 100px;
    flex-shrink: 0;
    border: 3px solid rgb(224,62,26);
    border-radius: 12px;
    text-align: center;
    background-color: white;
    color: black;

    display: flex;
    flex-direction: column;

    &:hover {
        cursor: ${props => props.hover ? 'pointer' : 'initial'};
    }
`;

const Back = styled.div`
    width: 190px;
    height: 100px;
    color: white;
    background-color: rgb(224,62,26);
    border-radius: 12px;
    transform: translateZ( -.1px) rotateY(180deg);

    position: absolute;
    top: 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &:hover {
        cursor: pointer;
    }
`;

const Title = styled.span`
    font-size: 16px;
    padding: 5px;
    border-bottom: 1px solid rgb(224,62,26);
    text-overflow: ellipsis;
    overflow: hidden;
`;

const Description = styled.span`
    /* width: 100%;
    height: 100%;
    font-size: 14px;
    font-style: italic;
    text-align: center;
    text-overflow: ellipsis;
    overflow: hidden; */
    
    padding: 5px;
    margin: auto 0;
    font-size: 14px;
    font-style: italic;
    background-color: initial;
    text-align: center;
    text-overflow: ellipsis;
    overflow: hidden;

    /* display: flex;
    align-items: center;
    justify-content: center; */
`;

TodoStyle.Front = Front;
TodoStyle.Back = Back;
TodoStyle.Title = Title;
TodoStyle.Description = Description;

export default TodoStyle;