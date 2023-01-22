import styled from 'styled-components';

const TodoCardStyle = styled.div`
    position: relative;
    /* width: 272px; */
    height: auto;
    width: 100%;
    /* height: 400px; */
    background-color: rgb(224,224,224);
    border-radius: 25px;
`;

const TodoCardTitle = styled.h3`
    border-radius: 20px 20px 0 0;
    background-color: ${props => props.color};
    height: 40px;
    color: white;

    display: flex;
    justify-content: center;
    align-items: center;
`;

const ProgressBarContainer = styled.div`
    width: 100%;
    height: 33px;
    text-align: center;
    border-radius: 0 0 20px 20px;
    background-color: ${props => props.color};
    padding: 0 10px;
    margin-top: 5px;

    display: flex;
    justify-content: center;
    align-items: center;
`;

const GroupWrapper = styled.div`
    margin: 10px 5px 5px 5px;
    padding-bottom: 10px;
    border-right: 5px solid ${({lineColor}) => lineColor ? lineColor : 'rgb(255, 98, 0)'};
    /* border-bottom: 2px solid purple; */
    /* border: 2px solid purple; */
    background-color: white;
`;

TodoCardStyle.Title = TodoCardTitle;
TodoCardStyle.Bar = ProgressBarContainer;
TodoCardStyle.Group = GroupWrapper;

export default TodoCardStyle;