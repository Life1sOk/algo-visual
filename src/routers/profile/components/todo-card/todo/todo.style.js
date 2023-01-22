import styled from 'styled-components';

const TodoStyle = styled.div`
    /* position: relative; */
    /* width: 100%; */
    margin: 0 20px;

    display: flex;
    flex-direction: column;
`;

const TodoContainer = styled.div`
    width: 90%;
    min-height: 40px;
    /* margin: 0 auto; */
    color: ${props => props.state ? 'rgb(255,98,0)' : 'initial'};

    display: flex;
    align-items: center;
    gap: 20px;
`;

const Title = styled.span`
    font-size: 15px;
    /* margin: 0 auto; */
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

const DescriptionWrapper = styled.div`
    width: 100%;
    height: ${props => props.state ? '0' : `${props.generatedHeight + 16}px`}; 
    z-index: ${props => 100 - props.index };
    background-color: white;
    border-bottom: ${props => !props.state ? 'none' : `3px solid rgb(255,98,0)`};
    border-radius: 0 0 10px 10px;
    border-top: 1px solid grey;
    transition: all .2s ease-in-out;
`;

const DiscriptionBox = styled.textarea`
    width: 100%;
    height: calc(100% - 5px);
    padding: 0 5px 0 20px;
    margin: 5px 0 8px 0;
    font-size: 14px;
    font-style: italic;
    resize: none;
    border: none;
    border-radius: 0 0 10px 10px;
`;

TodoStyle.Discription = DiscriptionBox;
TodoStyle.Container = TodoContainer;
TodoStyle.Title = Title;
TodoStyle.Done = Done;
TodoStyle.DescriptionWrapper = DescriptionWrapper;

export default TodoStyle;