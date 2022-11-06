import styled from 'styled-components';

export const PartsSectionContainer = styled.div`
    width: 93%;
    ${'' /* height: 300px; */}
    border: 2px solid lightcoral;
    border-radius: 20px;
    padding: 10px 0;

    display: flex;
`;

export const PartsKolo = styled.div`
    width: 350px;
    height: 350px;
    background-color: white;
    border-radius: 50%;
    flex-shrink: 0;
`;

export const PartsDesc = styled.div`
    width: 100%;
    height: 100%;
    background-color: yellow;
`;