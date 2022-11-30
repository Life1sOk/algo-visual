import styled from 'styled-components';

const TodoStyle = styled.div`
    position: relative;
    width: 100%;
    margin: 5px 0;
    /* border-bottom: .5px solid grey; */

    display: flex;
    flex-direction: column;
`;

const TodoContainer = styled.div`
    width: 90%;
    min-height: 40px;
    margin: 0 auto;
    color: ${props => props.state ? 'rgb(255,98,0)' : 'initial'};
    border-bottom: 1px solid grey;

    display: flex;
    align-items: center;
`;

const Title = styled.span`
    font-size: 15px;
    margin: 0 auto;
    cursor: pointer;

    text-decoration-line: ${props => !props.done ? 'none' : 'line-through'};
    text-decoration-color: ${props => props.color};
`;

const Done = styled.h2`
    color: ${props => props.color};

    &:hover {
        cursor: pointer;
    }
`;

const DiscriptionBox = styled.textarea`
    position: absolute;
    top: 40px;
    left: 0;
    width: 100%;
    height: ${props => !props.state ? '0' : `${props.generatedHeight + 10}px`};
    background-color: white;
    padding: 5px 5px 0 20px;
    font-size: 14px;
    font-style: italic;
    z-index: ${props => 100 - props.index };
    resize: none;
    border: none;
    border-bottom: ${props => !props.state ? '5px solid rgba(255,98,0, 0)' : `5px solid rgb(255,98,0)`};
    border-radius: 0 0 10px 10px;
    transition: all .2s ease-in-out;
`;

TodoStyle.Discription = DiscriptionBox;
TodoStyle.Container = TodoContainer;
TodoStyle.Title = Title;
TodoStyle.Done = Done;

export default TodoStyle;