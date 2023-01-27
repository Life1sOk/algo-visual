import styled from 'styled-components';

export const QuestStyle = styled.div`
    position: relative;
    color: white;
    background-color: rgb(6,34,60);
    border-radius: 15px;
    padding: 10px 20px;
    border-right: 2px solid ${({color}) => color};

    display: flex;
    align-items: center;
    gap: 15px;

    /* box-shadow: ${({color}) => `1px 0px 27px -6px ${color}`};
    -webkit-box-shadow: ${({color}) => `1px 0px 27px -6px ${color}`};
    -moz-box-shadow: ${({color}) =>`1px 0px 27px -6px ${color}`}; */
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;

    z-index: 2;
`;

export const Background = styled.div`
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);

    width: 100%;
    /* height: 200px; */
    /* background-color: yellow; */
    display: ${props => props.state ? 'flex' : 'none'};
    justify-content: space-around;
    align-items: center;
    /* gap: 70px; */
`;

export const SvgWrapper = styled.div`
    transform: ${({type}) => type === 'one' ?
        'scale(1.3) translateX(60px) translateY(0px)' 
     : 
        'scale(1.3) translateX(-60px) translateY(0px)'
    }
`;