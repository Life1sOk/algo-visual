// run all styled letters from big to small
import styled from 'styled-components';

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