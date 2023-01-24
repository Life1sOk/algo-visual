import styled from 'styled-components';

export const QuestStyle = styled.div`
    color: white;
    width: 892px;
    /* margin-left: 60px; */

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
`;

export const QuestContainer = styled.div`
    padding-right: 20px;
    border-right: 2px solid ${({color}) => color};

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
`;

export const AboutAnimationWrapper = styled.div`
    transition: all .3s linear;
    border-radius: 20px;

    &:hover {
        cursor: pointer;
        transform: scale(1.025);
        /* box-shadow: 1px 0px 50px 2px ${({color}) => color};
        -webkit-box-shadow: 1px 0px 50px 2px ${({color}) => color};
        -moz-box-shadow: 1px 0px 50px 2px ${({color}) => color}; */

        box-shadow: 1px 0px 27px -6px ${({color}) => color};
        -webkit-box-shadow: 1px 0px 27px -6px rgb(255,98,0);
        -moz-box-shadow: 1px 0px 27px -6px ${({color}) => color};

        /* box-shadow: 1px 0px 30px -2px ${({color}) => color};
        -webkit-box-shadow: 1px 0px 30px -2px ${({color}) => color};
        -moz-box-shadow: 1px 0px 30px -2px ${({color}) => color}; */
    }
`;