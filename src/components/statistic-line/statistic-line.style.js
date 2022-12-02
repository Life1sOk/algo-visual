import styled from 'styled-components';

export const LineContainer = styled.div`
    color: ${props => 
        props.type === 'active' ? 'rgb(255, 255, 102)' :
        props.type === 'finished' ? 'rgb(102,255,102)' :
        props.type === 'expired' ? 'rgb(255, 102, 102)' : 'white'
    };

    display: flex;
    justify-content: space-between;
`;

export const LineTitle = styled.span`
    font-size: 16px;
`;