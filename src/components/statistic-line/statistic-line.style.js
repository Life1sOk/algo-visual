import styled from 'styled-components';

export const LineContainer = styled.div`
    color: ${props => 
        props.type === 'active' ? 'rgb(255, 255, 102)' :
        props.type === 'finished' ? 'rgb(102,255,102)' :
        props.type === 'expired' ? 'rgb(255, 102, 102)' : 'white'
    };
    font-size: ${props => props.size === 'S' ? '13px' : 
                    props.size === 'M' ? '16px' :
                    props.size === 'L' ? '20px' : '16px'};

    display: flex;
    justify-content: space-between;
`;