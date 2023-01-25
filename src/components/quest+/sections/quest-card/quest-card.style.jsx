import styled from "styled-components"; 

export const QuestCardContainer = styled.div`
    padding-right: 20px;
    border-right: 2px solid ${({color, direction}) => direction === 'raw' ? 'none' : color};

    display: flex;
    flex-direction: ${({direction}) => direction !== 'raw' ? 'raw' : 'column'};
    justify-content: center;
    align-items: center;
    gap: 15px;
`;

export const CardAnimationWrapper = styled.div`
    transition: all .3s linear;
    border-radius: 20px;

    transform: ${({animation}) => !animation ? 'scale(1.025)' : '1' };
    box-shadow: ${({animation, color}) => !animation ? `1px 0px 27px -6px ${color}` : 'initial' };
    -webkit-box-shadow: ${({animation, color}) => !animation ? `1px 0px 27px -6px ${color}` : 'initial' };
    -moz-box-shadow: ${({animation, color}) => !animation ? `1px 0px 27px -6px ${color}` : 'initial' };

    &:hover {
        cursor: ${({animation}) => animation ? 'pointer' : 'initial'};
        transform: ${({animation}) => animation ? 'scale(1.025)' : '1' };
        box-shadow: ${({animation, color}) => animation ? `1px 0px 27px -6px ${color}` : 'initial' };
        -webkit-box-shadow: ${({animation, color}) => animation ? `1px 0px 27px -6px ${color}` : 'initial' };
        -moz-box-shadow: ${({animation, color}) => animation ? `1px 0px 27px -6px ${color}` : 'initial' };
    }
`;